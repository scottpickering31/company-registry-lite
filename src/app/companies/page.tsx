import MuiContainer from "@/src/components/layout/MuiComponents/MuiContainer";
import MuiHeader from "@/src/components/layout/MuiComponents/MuiHeader";
import MuiNavigation from "@/src/components/layout/MuiComponents/MuiNavigation";
import MuiQueryInput from "@/src/components/layout/MuiComponents/MuiQueryInput";
import { CompanyColumns } from "@/src/features/dashboard/CompanyColumns";
import TableClient from "@/src/features/TableClient";
import { mockCompanies } from "@/src/mock/dashboard";

export default function Companies() {
  return (
    <>
      <MuiNavigation />
      <MuiContainer>
        <MuiHeader
          title="Companies"
          buttonActive
          buttonText="Add New Company"
        />
        <MuiQueryInput
          querySelectTitles={[
            { id: 1, label: "Status:", values: ["All", "Active", "Dormant"] },
            { id: 2, label: "Sort By:", values: ["Name", "Date Created"] },
          ]}
          textFieldLabel="Search Companies..."
        />
        <TableClient
          rows={mockCompanies}
          columns={CompanyColumns}
          rowsPerPageOptions={[8, 12, 15]}
        />
      </MuiContainer>
    </>
  );
}
