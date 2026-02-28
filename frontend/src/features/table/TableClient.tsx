"use client";

import MuiTable from "@/src/components/layout/mui/MuiTable";
import type { ColumnDef } from "@/src/types/columns.types";

type TableClientProps<T extends { id: number; name: string }> = {
  rows: T[];
  columns: ColumnDef<T>[];
  rowsPerPageOptions: [number, number, number];
  enableClientFiltering?: boolean;
};

export default function TableClient<T extends { id: number; name: string }>({
  rows,
  columns,
  rowsPerPageOptions,
  enableClientFiltering,
}: TableClientProps<T>) {
  return (
    <MuiTable
      rows={rows}
      columns={columns}
      rowsPerPageOptions={rowsPerPageOptions}
      enableClientFiltering={enableClientFiltering}
    />
  );
}
