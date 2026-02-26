import React from "react";
import MuiContainer from "../MuiComponents/MuiContainer";
import { Divider } from "@mui/material";

export default function AuditLog() {
  return (
    <MuiContainer
      className="shadow-2xl rounded-md"
      sx={{ p: "1rem", backgroundColor: "#ffffff", mt: "1rem", width: "50rem" }}
    >
      <p className="text-2xl font-bold mb-2">Audit Log {/* TODO */}</p>
      <Divider />
      <MuiContainer sx={{ px: "1rem" }}>
        <li>Filing submitted by Admin - 01/10/2023</li>
        <li>Officer added: John Doe - 15/09/2023</li>
        <li>Company created by Admin - 12/01/2015</li>
      </MuiContainer>
      <Divider />
      <p className="text-right">View all logs</p>
    </MuiContainer>
  );
}
