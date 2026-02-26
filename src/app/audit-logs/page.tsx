import MuiContainer from "@/src/components/layout/MuiComponents/MuiContainer";
import MuiHeader from "@/src/components/layout/MuiComponents/MuiHeader";
import MuiNavigation from "@/src/components/layout/MuiComponents/MuiNavigation";
import MuiQueryInput from "@/src/components/layout/MuiComponents/MuiQueryInput";
import { AuditLogsColumns } from "@/src/features/audit-logs/Audit-Logs-Columns";
import TableClient from "@/src/features/TableClient";
import { mockAuditLogs } from "@/src/mock/audit-logs";

export default function AuditLogs() {
  return (
    <>
      <MuiNavigation />
      <MuiContainer>
        <MuiHeader title="Audit Logs" buttonActive={false} />
        <MuiQueryInput
          querySelectTitles={[
            {
              id: 1,
              label: "Event Type:",
              values: ["All", "Active", "Dormant"],
            },
            { id: 2, label: "Company:", values: ["All Companies, 1, 2, 3"] },
            { id: 3, label: "Actor:", values: ["Any", "Active", "Dormant"] },
          ]}
          textFieldActive={false}
        />
        <TableClient
          rows={mockAuditLogs}
          columns={AuditLogsColumns}
          rowsPerPageOptions={[8, 12, 15]}
        />
      </MuiContainer>
    </>
  );
}
