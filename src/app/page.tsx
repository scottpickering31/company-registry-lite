import MuiContainer from "@/src/components/layout/MuiComponents/MuiContainer";
import MuiHeader from "@/src/components/layout/MuiComponents/MuiHeader";
import MuiNavigation from "@/src/components/layout/MuiComponents/MuiNavigation";
import MuiQueryInput from "@/src/components/layout/MuiComponents/MuiQueryInput";
import CompaniesTableClient from "../features/dashboard/CompaniesTableClient";
import { mockCompanies } from "../mock/dashboard";

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
        <CompaniesTableClient rows={mockCompanies} />
      </MuiContainer>
    </>
  );
}
