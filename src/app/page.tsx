import MuiContainer from "../components/layout/MuiContainer";
import MuiHeader from "../components/layout/MuiHeader";
import MuiNavigation from "../components/layout/MuiNavigation";
import MuiQueryInput from "../components/layout/MuiQueryInput";
import MuiTable from "../components/layout/MuiTable";
import { mockCompanies, mockCompanyColumnNames } from "../mock/companies";

const DashboardQuerySelectTitles = [
  {
    id: 1,
    label: "Status:",
    values: ["All", "Active", "Dormant"],
  },
  {
    id: 2,
    label: "Sort By:",
    values: ["Name", "Date Created"],
  },
];

const TextFieldLabel = "Search Companies...";

export default function Dashboard() {
  return (
    <>
      <MuiNavigation />
      <MuiContainer>
        {/* TODO: Add Button onClick handler to MuiHeader */}
        <MuiHeader
          title="Company Management"
          buttonActive={true}
          buttonText="Add New Company"
        />
        <MuiQueryInput
          querySelectTitles={DashboardQuerySelectTitles}
          textFieldLabel={TextFieldLabel}
        />
        <MuiTable columns={mockCompanyColumnNames} rows={mockCompanies} />
      </MuiContainer>
    </>
  );
}
