import MuiContainer from "@/src/components/layout/mui/MuiContainer";
import MuiHeader from "@/src/components/layout/mui/MuiHeader";
import MuiNavigation from "@/src/components/layout/mui/MuiNavigation";
import MuiQueryInput from "@/src/components/layout/mui/MuiQueryInput";
import AuditLog from "@/src/components/layout/dashboard/AuditLog";
import CompanyDetails from "@/src/components/layout/dashboard/CompanyDetails";
import { CompanyColumns } from "@/src/features/dashboard";
import { TableClient } from "@/src/features/table";
import { mockCompanies } from "@/src/mocks/dashboard";

export default function Dashboard() {
  return (
    <>
      <MuiNavigation />
      <MuiContainer>
        <MuiHeader
          title="Company Management"
          subTitle="Dashboard"
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
          columns={CompanyColumns}
          rows={mockCompanies}
          rowsPerPageOptions={[3, 5, 10]}
        />
      </MuiContainer>
      <MuiContainer sx={{ display: "flex", flexDirection: "row" }}>
        <CompanyDetails />
        <AuditLog />
      </MuiContainer>
    </>
  );
}
