import PocketBase from "pocketbase";
import { CleanedWhere, createAdapter, CustomAdapter, type AdapterDebugLogs } from "better-auth/adapters";
import { offsetToPage, sortByToFilter, whereToFilter } from "./utils.js";

/**
 * Runtime configuration that the integrator may supply when instantiating the adapter.
 */
export interface PocketBaseAdapterConfig {
  /** Base URL of the PocketBase instance (eg. http://127.0.0.1:8090) */
  url: string;
  /** Optional admin or record auth token to perform privileged operations */
  authToken?: string;
  /** Optional string prefix applied to all Better‑Auth model names when mapping to PB collections */
  collectionPrefix?: string;
  /** Whether PB collections are pluralized (eg. "users" vs "user") */
  usePlural?: boolean;
  /** Fine‑grained debug logging */
  debugLogs?: AdapterDebugLogs | boolean;
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
    },

    adapter: ({
      options: _options,
      debugLog,
      schema: _schema,
      getDefaultModelName: _getDefaultModelName,
      getDefaultFieldName: _getDefaultFieldName,
    }): CustomAdapter => {
      const pb = new PocketBase(adapterConfig.url);

      if (adapterConfig.authToken) {
        // * NOTE(@000alen): token, model (unused)
        pb.authStore.save(adapterConfig.authToken, null);
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
        const filter = whereToFilter(where);

        const record = await collection<T>(model)
          .getFirstListItem(filter)
          .catch((error) => {
            debugLog(`Error finding record in ${model}: ${error}`);
            throw error;
          });

        return record;
      }

      const findMany: CustomAdapter["findMany"] = async <T>({ model, where, limit, sortBy, offset }: {
        model: string;
        where?: CleanedWhere[];
        limit: number;
        sortBy?: { field: string; direction: "asc" | "desc"; };
        offset?: number;
      }): Promise<T[]> => {
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
        const filter = whereToFilter(where);

        const count = await collection(model)
          .getFullList({
            filter,
            fields: "id"
          })
          .then((list) => list.length);

        return count;
      }

      return {
        create,
        update,
        updateMany,
        findOne,
        findMany,
        delete: _delete,
        deleteMany,
        count,

        /* Expose adapter‑level options for downstream consumers */
        options: adapterConfig,
      } satisfies CustomAdapter;
    },
  });
