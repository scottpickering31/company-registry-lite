import MuiContainer from "@/src/components/layout/MuiComponents/MuiContainer";
import MuiHeader from "@/src/components/layout/MuiComponents/MuiHeader";
import MuiNavigation from "@/src/components/layout/MuiComponents/MuiNavigation";
import MuiQueryInput from "@/src/components/layout/MuiComponents/MuiQueryInput";
import { FilingColumns } from "@/src/features/filings/FilingColumns";
import TableClient from "@/src/features/TableClient";
import { mockFilings } from "@/src/mock/filings";

export default function Filings() {
  return (
    <>
      <MuiNavigation />
      <MuiContainer>
        <MuiHeader
          title="Filings"
          buttonActive
          buttonText="File New Document"
        />
        <MuiQueryInput
          querySelectTitles={[
            {
              id: 1,
              label: "Company:",
              values: ["All Companies", "Active", "Dormant"],
            },
            { id: 2, label: "Internal Ref:", values: ["Any, 1, 2, 3"] },
          ]}
          textFieldLabel="Search filings..."
        />
        <TableClient
          rows={mockFilings}
          columns={FilingColumns}
          rowsPerPageOptions={[8, 12, 15]}
        />
      </MuiContainer>
    </>
  );
}
