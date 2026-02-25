"use client";

import MuiTable from "@/src/components/layout/MuiComponents/MuiTable";
import type { Company } from "@/src/types/companies.types";
import { CompanyColumns } from "./CompanyColumns";

export default function CompaniesTableClient({ rows }: { rows: Company[] }) {
  return <MuiTable columns={CompanyColumns} rows={rows} />;
}
