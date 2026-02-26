"use client";

import {
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  Paper,
} from "@mui/material";
import { useMemo, useState } from "react";
import MuiTableCell from "@/src/components/layout/MuiComponents/MuiTableCell";
import type { ColumnDef } from "@/src/types/columns.types";
import { useInputStore } from "@/src/store/input.store";

type Props<T extends { id: number; name: string }> = {
  rows: T[];
  columns: ColumnDef<T>[];
  rowsPerPageOptions: [number, number, number];
};

export default function MuiTable<T extends { id: number; name: string }>({
  rows,
  columns,
  rowsPerPageOptions = [3, 5, 10],
}: Props<T>) {
  const { input } = useInputStore();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(rowsPerPageOptions[0]);
  const [selected, setSelected] = useState<T | null>(null);

  const filteredInput = useMemo(() => {
    const q = input.trim().toLowerCase();
    if (!q) return rows;
    return rows.filter((row) => row.name.toLowerCase().includes(q));
  }, [input, rows]);

  const filteredRows = useMemo(() => {
    const q = input.trim().toLowerCase();
    if (!q) return rows;
    return rows.filter((row) => row.name.toLowerCase().includes(q));
  }, [input, rows]);

  const visibleRows = useMemo(
    () =>
      filteredRows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage),
    [filteredRows, page, rowsPerPage],
  );

  return (
    <div className="mt-4 rounded-md bg-white shadow-xl">
      <TableContainer sx={{ maxHeight: 440 }} component={Paper}>
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
                    fontSize: "18px",
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
        rowsPerPageOptions={rowsPerPageOptions}
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
