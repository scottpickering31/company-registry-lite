import type { Company } from "./companies.types";

export type CompanyColumnKey = "name" | "companyNumber" | "status" | "actions";
export type CompanyColumnType = "text" | "bold" | "status" | "actions";

export type CompanyColumnConfig = {
  key: CompanyColumnKey;
  header: string;
  type: CompanyColumnType;
};

export type CompanyTablePayload = {
  columns: CompanyColumnConfig[];
  rows: Company[];
  page?: number;
  pageSize?: number;
  total?: number;
};
