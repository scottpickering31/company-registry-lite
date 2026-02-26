import MuiContainer from "@/src/components/layout/MuiComponents/MuiContainer";
import MuiHeader from "@/src/components/layout/MuiComponents/MuiHeader";
import MuiNavigation from "@/src/components/layout/MuiComponents/MuiNavigation";
import MuiQueryInput from "@/src/components/layout/MuiComponents/MuiQueryInput";
import TableClient from "@/src/features/TableClient";
import { mockCompanies } from "@/src/mock/dashboard";
import CompanyDetails from "../components/layout/dashboard/CompanyDetails";
import AuditLog from "../components/layout/dashboard/AuditLog";
import { CompanyColumns } from "../features/dashboard/CompanyColumns";

export default function Dashboard() {
  return (
    <>
      <MuiNavigation />
      <MuiContainer>
        <MuiHeader
          title="Company Management"
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
