"use client";
import { AuditLogs } from "@/src/types/audit-logs.types";
import type { ColumnDef } from "@/src/types/columns.types";

export const AuditLogsColumns: ColumnDef<AuditLogs>[] = [
  {
    header: "ID",
    cell: (c) => <span style={{ fontWeight: 700 }}>{c.id}</span>,
  },
  {
    header: "Date/Time",
    cell: (c) => <span style={{ fontWeight: 700 }}>{c.date}</span>,
  },
  {
    header: "Event",
    cell: (c) => <span style={{ fontWeight: 700 }}>{c.event}</span>,
  },
  {
    header: "Company Name",
    cell: (c) => <span style={{ fontWeight: 700 }}>{c.company}</span>,
  },
  {
    header: "Officer",
    cell: (c) => <span style={{ fontWeight: 700 }}>{c.officer}</span>,
  },
];
