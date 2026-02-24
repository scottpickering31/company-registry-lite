"use client";

import { mockCompanies, mockCompanyColumnNames } from "@/src/mock/companies";
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

interface MuiTableProps<T extends { id: number }> {
  rows: T[];
}

export default function MuiTable<T extends { id: number }>({
  rows,
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
              {mockCompanyColumnNames.map((col) => (
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
              .map((company) => {
                return (
                  <TableRow
                    hover
                    role="checkbox"
                    tabIndex={-1}
                    key={company.id}
                    selected={company.id === selected.id}
                    // onClick={() => setSelected(company)}
                    style={{ cursor: "pointer" }}
                  >
                    <TableCell
                      align="center"
                      style={{ fontSize: "16px", fontWeight: "bold" }}
                    >
                      {company.name}
                    </TableCell>
                    <TableCell align="center" style={{ fontSize: "16px" }}>
                      {company.companyNumber}
                    </TableCell>
                    {company.status === "Active" ? (
                      <TableCell
                        align="center"
                        style={{ color: "green", fontSize: "16px" }}
                      >
                        {company.status}
                      </TableCell>
                    ) : (
                      <TableCell
                        align="center"
                        style={{ color: "red", fontSize: "16px" }}
                      >
                        {company.status}
                      </TableCell>
                    )}
                    <TableCell align="center" style={{ fontSize: "16px" }}>
                      {company.actions.map((action) => (
                        <span key={action}>{action}</span>
                      ))}
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
        count={mockCompanies.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </div>
  );
}
