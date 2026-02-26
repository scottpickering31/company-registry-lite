"use client";

import { TableCell, type TableCellProps } from "@mui/material";
import type { ReactNode } from "react";

type Props = TableCellProps & { children: ReactNode };

export default function MuiTableCell({ children, sx, ...props }: Props) {
  return (
    <TableCell
      {...props}
      sx={{
        fontSize: "16px",
        ...sx,
      }}
    >
      {children}
    </TableCell>
  );
}
