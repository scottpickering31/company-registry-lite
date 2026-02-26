import MuiContainer from "@/src/components/layout/MuiComponents/MuiContainer";
import MuiHeader from "@/src/components/layout/MuiComponents/MuiHeader";
import MuiNavigation from "@/src/components/layout/MuiComponents/MuiNavigation";
import MuiQueryInput from "@/src/components/layout/MuiComponents/MuiQueryInput";
import { OfficerColumns } from "@/src/features/officers/OfficerColumns";
import TableClient from "@/src/features/TableClient";
import { mockOfficers } from "@/src/mock/officers";

export default function Officers() {
  return (
    <>
      <MuiNavigation />
      <MuiContainer>
        <MuiHeader title="Officers" buttonActive buttonText="Add New Officer" />
        <MuiQueryInput
          querySelectTitles={[
            {
              id: 1,
              label: "Company:",
              values: ["All Companies", "Active", "Dormant"],
            },
            { id: 2, label: "Role:", values: ["Any, 1, 2, 3"] },
          ]}
          textFieldLabel="Search officers..."
        />
        <TableClient
          rows={mockOfficers}
          columns={OfficerColumns}
          rowsPerPageOptions={[8, 12, 15]}
        />
      </MuiContainer>
    </>
  );
}
