"use client";

import {
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
} from "@mui/material";
import { useMemo, useState } from "react";
import MuiTableCell from "@/src/components/layout/MuiComponents/MuiTableCell";
import type { ColumnDef } from "@/src/types/columns.types";

type Props<T extends { id: number }> = {
  rows: T[];
  columns: ColumnDef<T>[];
};

export default function MuiTable<T extends { id: number }>({
  rows,
  columns,
}: Props<T>) {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [selected, setSelected] = useState<T | null>(null);

  const visibleRows = useMemo(
    () => rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage),
    [rows, page, rowsPerPage],
  );

  return (
    <div className="mt-6 rounded-md bg-white shadow-md">
      <TableContainer sx={{ maxHeight: 290 }}>
        <Table stickyHeader aria-label="table">
          <TableHead>
            <TableRow>
              {columns.map((col) => (
                <MuiTableCell
                  key={col.header}
                  align={col.align ?? "center"}
                  sx={{
                    minWidth: col.width ?? 100,
                    backgroundColor: "#f0f0f0",
                    fontSize: 20,
                    fontWeight: "bold",
                    ...col.sx,
                  }}
                >
                  {col.header}
                </MuiTableCell>
              ))}
            </TableRow>
          </TableHead>

          <TableBody>
            {visibleRows.map((row) => (
              <TableRow
                key={row.id}
                hover
                selected={row === selected}
                onClick={() => setSelected(row)}
                sx={{ cursor: "pointer" }}
              >
                {columns.map((col) => (
                  <MuiTableCell
                    key={col.header}
                    align={col.align ?? "center"}
                    sx={col.sx}
                  >
                    {col.cell(row)}
                  </MuiTableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <TablePagination
        sx={{ backgroundColor: "#f0f0f0" }}
        rowsPerPageOptions={[3, 5, 10]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={(_, newPage) => setPage(newPage)}
        onRowsPerPageChange={(e) => {
          setRowsPerPage(Number(e.target.value));
          setPage(0);
        }}
      />
    </div>
  );
}
