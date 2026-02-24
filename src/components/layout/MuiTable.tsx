"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
} from "@mui/material";
import { useState } from "react";
import { mockCompanies } from "@/src/mock/companies";
import ActionsButtonSet from "../buttons/ActionsButtonSet";

interface MuiTableProps<T> {
  rows: T[];
  columns: string[];
}

export default function MuiTable<T extends { id: number }>({
  rows,
  columns,
}: MuiTableProps<T>) {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [selected, setSelected] = useState(rows[0]);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <div className="mt-6 rounded-md bg-white shadow-md">
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((col) => (
                <TableCell
                  key={col}
                  align={"center"}
                  style={{
                    minWidth: "100px",
                    backgroundColor: "#f0f0f0",
                    fontSize: "20px",
                    fontWeight: "bold",
                  }}
                >
                  {col}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {mockCompanies
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow
                    hover
                    role="checkbox"
                    tabIndex={-1}
                    key={row.id}
                    selected={row.id === selected.id}
                    onClick={() => setSelected(row)}
                    style={{ cursor: "pointer" }}
                  >
                    <TableCell align="center" style={{ fontSize: "16px" }}>
                      {row.name}
                    </TableCell>
                    <TableCell align="center" style={{ fontSize: "16px" }}>
                      {row.companyNumber}
                    </TableCell>
                    <TableCell align="center" style={{ fontSize: "16px" }}>
                      {row.status}
                    </TableCell>
                    <TableCell align="center" style={{ fontSize: "16px" }}>
                      <ActionsButtonSet />
                    </TableCell>
                  </TableRow>
                );
              })}
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
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </div>
  );
}
