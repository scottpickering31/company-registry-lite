import React from "react";
import MuiButton from "./MuiButton";
import { Stack } from "@mui/material";

export default function ActionsButtonSet() {
  return (
    <Stack direction="row" spacing={2} justifyContent={"center"}>
      <MuiButton actions>View</MuiButton>
      <MuiButton actions>Edit</MuiButton>
      <MuiButton actions>Delete</MuiButton>
    </Stack>
  );
}
