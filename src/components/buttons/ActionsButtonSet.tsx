import React from "react";
import MuiButton from "./MuiButton";
import { Stack } from "@mui/material";
import Link from "next/link";

interface ActionsButtonSetProps {
  view: string;
}

export default function ActionsButtonSet({ view }: ActionsButtonSetProps) {
  return (
    <Stack direction="row" spacing={2} justifyContent={"center"}>
      <Link href={view}>
        <MuiButton actions>View</MuiButton>
      </Link>
      <Link href="/">
        <MuiButton actions>Edit</MuiButton>
      </Link>
      <MuiButton actions>Delete</MuiButton>
    </Stack>
  );
}
