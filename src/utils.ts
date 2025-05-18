import { CleanedWhere } from "better-auth/adapters";

function quote(v: string) {
  return `"${v.replace(/"/g, '\\"')}"`;
}

function formatValue(value: CleanedWhere["value"]): string {
  if (value === null) return "null";
  if (value instanceof Date) return quote(value.toISOString());
  if (Array.isArray(value)) return `[${value.map(formatValue).join(",")}]`;
  if (typeof value === "string") return quote(value);
  return String(value); // number or boolean
}

function buildExpr({ field, operator, value }: CleanedWhere): string {
  const val = formatValue(value);

  switch (operator) {
    case "eq": return `${field} = ${val}`;
    case "ne": return `${field} != ${val}`;
    case "lt": return `${field} < ${val}`;
    case "lte": return `${field} <= ${val}`;
    case "gt": return `${field} > ${val}`;
    case "gte": return `${field} >= ${val}`;
    case "in": return `${field} ?= ${val}`;
    case "contains": return `${field} ~ ${val}`;
    case "starts_with": return `${field} ~ ${quote(String(value) + "%")}`;
    case "ends_with": return `${field} ~ ${quote("%" + String(value))}`;
    default: throw new Error(`Unsupported operator ${operator}`);
  }
}

export function whereToFilter(clauses: CleanedWhere[] | undefined): string {
  if (!clauses?.length) return "";

  const parts: string[] = [];
  for (let i = 0; i < clauses.length; i++) {
    const c = clauses[i];
    parts.push(buildExpr(c));

    if (i < clauses.length - 1) {
      parts.push(c.connector === "AND" ? "&&" : "||");
    }
  }
  return parts.join(" ");
}

export function sortByToFilter(sortBy: { field: string; direction: "asc" | "desc"; } | undefined): string {
  if (!sortBy) return "";

  return `${sortBy.direction === "asc" ? "+" : "-"}${sortBy.field}`;
}

export function offsetToPage(offset: number | undefined, limit: number): number {
  return offset && limit ? Math.floor(offset / limit) + 1 : 1;
}