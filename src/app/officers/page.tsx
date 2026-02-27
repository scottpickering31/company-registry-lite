import MuiContainer from "@/src/components/layout/mui/MuiContainer";
import MuiHeader from "@/src/components/layout/mui/MuiHeader";
import MuiNavigation from "@/src/components/layout/mui/MuiNavigation";
import MuiQueryInput from "@/src/components/layout/mui/MuiQueryInput";
import { OfficerColumns } from "@/src/features/officers";
import { TableClient } from "@/src/features/table";
import { mockOfficers } from "@/src/mocks/officers";

export default function Officers() {
  return (
    <>
      <MuiNavigation />
      <MuiContainer>
        <MuiHeader
          title="Officers"
          buttonActive
          buttonText="Add New Officer"
          subTitle="Officer list"
        />
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
