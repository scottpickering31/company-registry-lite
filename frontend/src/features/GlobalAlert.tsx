"use client";

import { Alert, Snackbar } from "@mui/material";
import { useGlobalAlertStore } from "@/src/store/globalAlert.store";

export default function GlobalAlert() {
  const { isOpen, severity, message, clearAlert } = useGlobalAlertStore();

  return (
    <Snackbar
      open={isOpen}
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
      onClose={(_, reason) => {
        if (reason === "clickaway") return;
        clearAlert();
      }}
    >
      <Alert onClose={clearAlert} severity={severity} variant="filled">
        {message}
      </Alert>
    </Snackbar>
  );
}
