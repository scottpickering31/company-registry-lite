"use client";

import { TableCell, type TableCellProps } from "@mui/material";
import type { ReactNode } from "react";

type Props = TableCellProps & { children: ReactNode };

export default function MuiTableCell({ children, ...props }: Props) {
  return (
    <TableCell {...props} sx={{ fontSize: "18px" }}>
      {children}
    </TableCell>
  );
}
