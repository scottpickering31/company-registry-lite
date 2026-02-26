import MuiContainer from "../MuiComponents/MuiContainer";
import { Divider } from "@mui/material";
import MuiButton from "../../buttons/MuiButton";

export default function CompanyDetails() {
  return (
    <MuiContainer
      className="shadow-2xl rounded-md"
      sx={{
        p: "1rem",
        backgroundColor: "#ffffff",
        mt: "1rem",
        mr: "1rem",
      }}
    >
      <p className="text-2xl font-bold mb-2">Company Details - {/* TODO */}</p>
      <Divider />
      <MuiContainer sx={{ display: "flex", flexDirection: "row" }}>
        <MuiContainer sx={{ paddingY: "1rem" }}>
          <p>Company Number : {/* TODO */}</p>
          <p className="font-bold">Status:</p>
          <p>Incorporated : {/* TODO */}</p>
        </MuiContainer>
        <MuiContainer sx={{ paddingY: "1rem" }}>
          <MuiContainer
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              marginBottom: "1rem",
            }}
          >
            <p className="font-bold text-xl">Officers</p>
            <MuiButton>Add Officer</MuiButton>
          </MuiContainer>
          <MuiContainer sx={{ padding: "1rem", border: "1px solid black" }}>
            <p>John Doe (Director)</p>
            <p>Jane Smith (Secretary)</p>
          </MuiContainer>
        </MuiContainer>
      </MuiContainer>
      <Divider />
      <MuiContainer
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          paddingY: "1rem",
        }}
      >
        <h1>Recent Filings</h1>
        <MuiButton>File New Document</MuiButton>
      </MuiContainer>
      <Divider />
      <MuiContainer sx={{ px: "1rem" }}>
        <li>Annual Report</li>
        <li>Annual Report</li>
      </MuiContainer>
    </MuiContainer>
  );
}
