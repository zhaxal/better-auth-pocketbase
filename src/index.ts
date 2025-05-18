import PocketBase from "pocketbase";
import { CleanedWhere, createAdapter, CustomAdapter, type AdapterDebugLogs } from "better-auth/adapters";
import { getRandomId, offsetToPage, sortByToFilter, whereToFilter } from "./utils.js";
import { AdapterSchemaCreation } from "better-auth/types";

/**
 * Runtime configuration that the integrator may supply when instantiating the adapter.
 */
export interface PocketBaseAdapterConfig {
  /** Base URL of the PocketBase instance (eg. http://127.0.0.1:8090) */
  url: string;
  /** Optional admin or record auth token to perform privileged operations */

  // authToken?: string;
  authToken?: string | { email: string, password: string };

  /** Optional string prefix applied to all Better‑Auth model names when mapping to PB collections */
  collectionPrefix?: string;
  /** Whether PB collections are pluralized (eg. "users" vs "user") */
  usePlural?: boolean;
  /** Fine‑grained debug logging */
  debugLogs?: AdapterDebugLogs | boolean;

  generateMigration?: boolean;
  migrationFile?: string;
}

export const pocketbaseAdapter = (adapterConfig: PocketBaseAdapterConfig): ReturnType<typeof createAdapter> =>
  createAdapter({
    config: {
      adapterId: "pocketbase",
      adapterName: "PocketBase Adapter",
      usePlural: adapterConfig.usePlural ?? false,
      debugLogs: adapterConfig.debugLogs ?? false,
      supportsJSON: true, // PocketBase JSON field type
      supportsDates: true,
      supportsBooleans: true,
      supportsNumericIds: false, // PB uses 15‑char Alphanumeric IDs by default

      customIdGenerator() {
        return getRandomId();
      },
    },

    adapter: ({
      options: _options,
      debugLog,
      schema,
      // getDefaultModelName: _getDefaultModelName,
      // getDefaultFieldName: _getDefaultFieldName,
    }): CustomAdapter => {
      let ready: Promise<any> | null = null;

      const pb = new PocketBase(adapterConfig.url);

      if (adapterConfig.authToken) {
        if (typeof adapterConfig.authToken === "string") {
          // * NOTE(@000alen): token, model (unused)
          // pb.authStore.save(adapterConfig.authToken, null);
        } else {
          ready = pb.admins.authWithPassword(adapterConfig.authToken.email, adapterConfig.authToken.password);
        }
      }

      const collection = <T>(model: string) => pb.collection<T>(
        adapterConfig.collectionPrefix
          ? `${adapterConfig.collectionPrefix}${model}`
          : model
      );

      const findOne: CustomAdapter['findOne'] = async <T>({ model, where }: {
        model: string;
        where: CleanedWhere[];

        // * NOTE(@000alen): select can be ignored
        select?: string[];
      }): Promise<T> => {
        if (ready) await ready;

        const filter = whereToFilter(where);

        const record = await collection<T>(model)
          .getFirstListItem(filter)
          .catch((error) => {
            debugLog(`Error finding record in ${model}: ${error}`);
            // throw error;
            return null;
          });

        return record as T;
      }

      const findMany: CustomAdapter["findMany"] = async <T>({ model, where, limit, sortBy, offset }: {
        model: string;
        where?: CleanedWhere[];
        limit: number;
        sortBy?: { field: string; direction: "asc" | "desc"; };
        offset?: number;
      }): Promise<T[]> => {
        if (ready) await ready;

        const page = offsetToPage(offset, limit);
        const filter = whereToFilter(where);
        const sort = sortByToFilter(sortBy);

        const records = await collection<T>(model)
          .getList(
            page,
            limit ?? 30,
            {
              filter,
              sort,
            })
          .catch((error) => {
            debugLog(`Error finding records in ${model}: ${error}`);
            throw error;
          });

        return records.items;
      }

      const create: CustomAdapter['create'] = async <T extends Record<string, any>>({ model, data }: {
        model: string;
        data: T;

        // * NOTE(@000alen): select can be ignored
        select?: string[];
      }) => {
        if (ready) await ready;

        const record = await collection<T>(model)
          .create(data)
          .catch((error) => {
            debugLog(`Error creating record in ${model}: ${error}`);

            throw error;
          });

        debugLog(`Created record in ${model}`);

        return record;
      }

      const update: CustomAdapter['update'] = async <T>({ model, where, update }: {
        model: string;
        where: CleanedWhere[];
        update: T;
      }): Promise<T | null> => {
        if (ready) await ready;

        const filter = whereToFilter(where);

        const { id } = await collection<{ id: string }>(model)
          .getFirstListItem(filter, { fields: "id" })
          .then((result) => {
            if (!result) {
              throw new Error("Record not found");
            }

            return result;
          })
          .catch((error) => {
            debugLog(`Error finding record in ${model}: ${error}`);
            throw error;
          })

        const record = await collection<T>(model)
          .update(
            id,
            update as Record<string, any>
          )
          .catch((error) => {
            debugLog(`Error updating record in ${model}: ${error}`);
            throw error;
          });

        debugLog(`Updated record ${id} in ${model}`);

        return record;
      };

      // * NOTE(@000alen): this should update all records that match the where clause
      const updateMany: CustomAdapter['updateMany'] = async ({ model, where, update }: {
        model: string;
        where: CleanedWhere[];
        update: Record<string, any>;
      }): Promise<number> => {
        if (ready) await ready;

        const filter = whereToFilter(where);

        const records = await collection<{ id: string }>(model)
          .getFullList({
            filter,
            fields: "id"
          })
          .catch((error) => {
            debugLog(`Error finding records in ${model}: ${error}`);
            throw error;
          });

        // * NOTE(@000alen): add support for batch api
        const results = await Promise.allSettled(
          records.map((r) => collection(model).update(
            r.id,
            update as Record<string, any>
          ))
        )

        const count = results.filter((r) => r.status === "fulfilled").length;

        debugLog(`Updated ${count} records in ${model}`);

        return count;
      }

      const _delete: CustomAdapter['delete'] = async ({ model, where }: {
        model: string;
        where: CleanedWhere[];
      }): Promise<void> => {
        if (ready) await ready;

        const filter = whereToFilter(where);

        const { id } = await collection<{ id: string }>(model)
          .getFirstListItem(filter, { fields: "id" })
          .then((result) => {
            if (!result) {
              throw new Error("Record not found");
            }

            return result;
          })
          .catch((error) => {
            debugLog(`Error finding record in ${model}: ${error}`);
            throw error;
          })

        await collection(model)
          .delete(id)
          .catch((error) => {
            debugLog(`Error deleting record in ${model}: ${error}`);
            throw error;
          })

        debugLog(`Deleted record ${id} in ${model}`);
      }

      const deleteMany: CustomAdapter['deleteMany'] = async ({ model, where }: {
        model: string;
        where: CleanedWhere[];
      }): Promise<number> => {
        if (ready) await ready;

        const filter = whereToFilter(where);

        const records = await collection<{ id: string }>(model)
          .getFullList({
            filter,
            fields: "id"
          })
          .catch((error) => {
            debugLog(`Error finding records in ${model}: ${error}`);
            throw error;
          });

        const results = await Promise.allSettled(
          records.map((r) => collection(model).delete(r.id))
        )

        const count = results.filter((r) => r.status === "fulfilled").length;

        debugLog(`Deleted ${count} records in ${model}`);

        return count;
      }

      const count: CustomAdapter['count'] = async ({ model, where }: {
        model: string;
        where?: CleanedWhere[];
      }): Promise<number> => {
        if (ready) await ready;

        const filter = whereToFilter(where);

        const count = await collection(model)
          .getFullList({
            filter,
            fields: "id"
          })
          .then((list) => list.length);

        return count;
      }

      const createSchema: CustomAdapter["createSchema"] = async ({
        file,
        tables,
      }): Promise<AdapterSchemaCreation> => {
        if (ready) await ready;

        /**
         * Very tiny pluraliser: “user” → “users”, “status” → “status”.
         * Good enough for predictable Better-Auth model names.
         */
        const pluralise = (w: string) => (w.endsWith("s") ? w : `${w}s`);

        // -------------------- 1. Translate Better-Auth meta → PB collection objects
        type PbField = {
          name: string;
          type: string;
          required: boolean;
          unique?: boolean;
          options?: Record<string, unknown>;
        };

        type PbCollection = {
          name: string;
          type: "base";
          system: false;
          schema: PbField[];
        };

        const collections: PbCollection[] = Object.values(tables)
          .filter((tbl) => !tbl.disableMigrations)
          .sort((a, b) => (a.order ?? 0) - (b.order ?? 0))
          .map((tbl) => {
            const rawName = adapterConfig.usePlural
              ? pluralise(tbl.modelName)
              : tbl.modelName;
            const name = adapterConfig.collectionPrefix
              ? `${adapterConfig.collectionPrefix}${rawName}`
              : rawName;

            const schema: PbField[] = Object.entries(tbl.fields).map(
              ([fname, attr]) => {
                // ---------------  field-type mapping  ---------------
                const fmap: Record<string, string> = {
                  string: "text",
                  number: "number",
                  boolean: "bool",
                  date: "date",
                  json: "json",
                };
                let type = fmap[attr.type as string] ?? "json";

                // relation overrides the type
                let options: Record<string, unknown> | undefined;
                if (attr.references) {
                  type = "relation";
                  const refRaw = adapterConfig.usePlural
                    ? pluralise(attr.references.model)
                    : attr.references.model;
                  const refName = adapterConfig.collectionPrefix
                    ? `${adapterConfig.collectionPrefix}${refRaw}`
                    : refRaw;

                  options = {
                    collectionName: refName,
                    cascadeDelete: (attr.references.onDelete ?? "cascade") === "cascade",
                  };
                }

                return {
                  name: attr.fieldName ?? fname,
                  type,
                  required: attr.required ?? true,
                  unique: attr.unique ?? false,
                  options,
                };
              },
            );

            return { name, type: "base", system: false, schema };
          });

        const code = `/** AUTO-GENERATED BY Better-Auth PocketBase adapter
 *
 * Run once:
 *   npx tsx ${file ?? "./scripts/createPocketBaseSchema.ts"}
 */
import PocketBase from "pocketbase";

export async function createPocketBaseSchema(pb: PocketBase) {
  const collections = ${JSON.stringify(collections, null, 2)} as const;

  for (const col of collections) {
    try {
      await pb.collections.getOne(col.name);
      console.info(\`[PocketBase] collection "\${col.name}" already exists\`);
    } catch {
      await pb.collections.create(col);
      console.info(\`[PocketBase] created collection "\${col.name}"\`);
    }
  }
}

if (require.main === module) {
  // Execute immediately if run via node/tsx
  const pb = new PocketBase(process.env.POCKETBASE_URL ?? "http://127.0.0.1:8090");

  let ready: Promise<any> | null = null;

  if (process.env.POCKETBASE_TOKEN) {
    ready = (async () => pb.authStore.save(process.env.POCKETBASE_TOKEN!, null))();
  } else if (process.env.POCKETBASE_EMAIL && process.env.POCKETBASE_PASSWORD) {
    ready = pb.admins.authWithPassword(process.env.POCKETBASE_EMAIL!, process.env.POCKETBASE_PASSWORD!);
  }

  if (ready) {
    console.log("✓ PocketBase admin authenticated");

    ready.then(() => {
      createPocketBaseSchema(pb).then(() => {
        console.log("✓ PocketBase schema initialised");
        process.exit(0);
      });
    })
  } else {
    console.log("✓ PocketBase admin not authenticated");
  }
}
`;

        return {
          code,
          path: file ?? "./scripts/createPocketBaseSchema.ts",
          overwrite: true,
        };
      };

      if (adapterConfig.generateMigration) {
        createSchema({
          file: adapterConfig.migrationFile,
          tables: schema,
        })
          .then(async (result) => {
            const fs = await import("fs");
            fs.writeFileSync(result.path, result.code);
          })
      }

      return {
        /* Expose adapter‑level options for downstream consumers */
        options: adapterConfig,

        create,
        update,
        updateMany,
        findOne,
        findMany,
        delete: _delete,
        deleteMany,
        count,
        createSchema,

      } satisfies CustomAdapter;
    },
  });
