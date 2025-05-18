import { AdapterSchemaCreation } from "better-auth/types";

// Define a type for the attribute object to resolve linter errors
export type TableFieldAttribute = {
  type: string;
  references?: {
    model: string;
    onDelete?: "cascade" | "restrict" | "setNull";
  };
  fieldName?: string;
  required?: boolean;
  unique?: boolean;
  // Extend as necessary
};

/**
 * Generates a PocketBase migration that creates (and on rollback deletes)
 * collections derived from Better‑Auth metadata.
 *
 * **Key differences vs. the previous version**
 *   • Relation fields now include `collectionId` (not just collectionName) –
 *     PocketBase requires the literal UUID of the referenced collection.
 *   • All relation‑specific props (`collectionId`, `cascadeDelete`, `maxSelect`)
 *     are placed at the top level of the field object, matching PB export JSON.
 *   • A two‑pass build assigns a deterministic random `id` to every collection
 *     first, so relation fields can reference that ID even if the target
 *     collection appears later in the source list.
 */
export function generatePocketBaseSchema({
  tables,
  file,
  collectionPrefix,
  usePlural,
}: {
  tables: Record<string, any>;
  file?: string;
  collectionPrefix?: string;
  usePlural?: boolean;
}): AdapterSchemaCreation {
  /* ---------- helpers --------------------------------------------------- */
  const pluralise = (w: string) => (w.endsWith("s") ? w : `${w}s`);
  const randId = (prefix: string) => `${prefix}${Math.floor(Math.random() * 1_000_000_000)}`;

  /* ---------- PB field & collection shape ------------------------------- */
  type PbField = {
    id?: string;
    name: string;
    type: string;
    required: boolean;
    unique?: boolean;
    system?: boolean;
    presentable?: boolean;
    hidden?: boolean;
    primaryKey?: boolean;
    autogeneratePattern?: string;
    pattern?: string;
    min?: number;
    max?: number;
    // autodate
    onCreate?: boolean;
    onUpdate?: boolean;
    // relation‑specific
    collectionId?: string;
    cascadeDelete?: boolean;
    maxSelect?: number | null;
    minSelect?: number | null;
  };

  type PbCollection = {
    id: string;
    name: string;
    type: "base";
    system: boolean;
    fields: PbField[];
    listRule: null | string;
    viewRule: null | string;
    createRule: null | string;
    updateRule: null | string;
    deleteRule: null | string;
    indexes: string[];
  };

  /* ---------- 1st pass – assign collection IDs -------------------------- */
  const meta = Object.values(tables)
    .filter((tbl) => !tbl.disableMigrations)
    .sort((a, b) => (a.order ?? 0) - (b.order ?? 0));

  const colIdByModel: Record<string, string> = {};
  for (const tbl of meta) {
    const rawName = usePlural ? pluralise(tbl.modelName) : tbl.modelName;
    const name = collectionPrefix ? `${collectionPrefix}${rawName}` : rawName;
    colIdByModel[name] = randId("pbc_");
  }

  /* ---------- 2nd pass – build full definitions ------------------------- */
  const collections: PbCollection[] = meta.map((tbl) => {
    const rawName = usePlural ? pluralise(tbl.modelName) : tbl.modelName;
    const name = collectionPrefix ? `${collectionPrefix}${rawName}` : rawName;
    const thisColId = colIdByModel[name];

    const fields: PbField[] = [];

    // ----- system id field
    fields.push({
      id: randId("text"),
      name: "id",
      type: "text",
      required: true,
      primaryKey: true,
      system: true,
      presentable: false,
      autogeneratePattern: "[a-z0-9]{15}",
      pattern: "^[a-z0-9]+$",
      min: 15,
      max: 15,
    });

    // ----- user‑defined schema
    for (const [fname, attrUntyped] of Object.entries(tbl.fields)) {
      const attr = attrUntyped as TableFieldAttribute;
      const fmap: Record<string, string> = {
        string: "text",
        number: "number",
        boolean: "bool",
        date: "date",
        json: "json",
      };
      let type = fmap[attr.type] ?? "json";

      const field: PbField = {
        id: randId(type),
        name: attr.fieldName ?? fname,
        type,
        required: attr.required ?? false,
        unique: attr.unique ?? false,
        system: false,
        presentable: true,
        hidden: false,
        primaryKey: false,
      };

      // ---- relation handling
      if (attr.references) {
        field.type = "relation";
        const refRaw = usePlural ? pluralise(attr.references.model) : attr.references.model;
        const refName = collectionPrefix ? `${collectionPrefix}${refRaw}` : refRaw;

        field.collectionId = colIdByModel[refName] ?? "_pb_users_auth_"; // fall back to system users
        field.cascadeDelete = (attr.references.onDelete ?? "cascade") === "cascade";
        field.maxSelect = 1;
        field.minSelect = 0;
      }

      fields.push(field);
    }

    // ----- created / updated autodate
    fields.push({
      id: randId("autodate"),
      name: "created",
      type: "autodate",
      onCreate: true,
      onUpdate: false,
      required: false,
      system: false,
      presentable: false,
    });
    fields.push({
      id: randId("autodate"),
      name: "updated",
      type: "autodate",
      onCreate: true,
      onUpdate: true,
      required: false,
      system: false,
      presentable: false,
    });

    return {
      id: thisColId,
      name,
      type: "base",
      system: false,
      fields,
      listRule: null,
      viewRule: null,
      createRule: null,
      updateRule: null,
      deleteRule: null,
      indexes: [],
    } as PbCollection;
  });

  /* ---------- migration template --------------------------------------- */
  const migrationTimestamp = Math.floor(Date.now() / 1000);
  const defaultFileName = `${migrationTimestamp}_created_better_auth_collections.js`;

  const code = `/// <reference path="../pb_data/types.d.ts" />

/**
 * Auto-generated PocketBase migration – do NOT edit by hand.
 */

migrate((app) => {
  const collections = ${JSON.stringify(collections, null, 2)};

  for (const def of collections) {
    let existing;
    try {
      existing = app.findCollectionByNameOrId(def.name);
    } catch {}

    if (existing) {
      console.info(\`[PB] ${'${'}def.name${'}'} exists – skipping.\`);
    } else {
      app.save(new Collection(def));
      console.info(\`[PB] created ${'${'}def.name${'}'}.\`);
    }
  }
}, (app) => {
  const collections = ${JSON.stringify(collections, null, 2)}.reverse();

  for (const def of collections) {
    try {
      const col = app.findCollectionByNameOrId(def.name);
      if (col) app.delete(col);
    } catch {}
  }
});`;

  return {
    code,
    path: file ?? defaultFileName,
    overwrite: true,
  };
}
