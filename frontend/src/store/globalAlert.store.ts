import { create } from "zustand";

type AlertSeverity = "success" | "error" | "info" | "warning";

type GlobalAlertState = {
  isOpen: boolean;
  severity: AlertSeverity;
  message: string;
};

type GlobalAlertActions = {
  setAlert: ({
    severity,
    message,
    durationMs,
  }: {
    severity: AlertSeverity;
    message: string;
    durationMs?: number;
  }) => void;
  clearAlert: () => void;
};

const DEFAULT_DURATION_MS = 4000;
let hideTimer: ReturnType<typeof setTimeout> | null = null;

export const useGlobalAlertStore = create<
  GlobalAlertState & GlobalAlertActions
>((set) => ({
  isOpen: false,
  severity: "info",
  message: "",
  setAlert: ({ severity, message, durationMs = DEFAULT_DURATION_MS }) => {
    if (hideTimer) {
      clearTimeout(hideTimer);
      hideTimer = null;
    }

    set({ isOpen: true, severity, message });

    hideTimer = setTimeout(() => {
      set({ isOpen: false, message: "" });
      hideTimer = null;
    }, durationMs);
  },
  clearAlert: () => {
    if (hideTimer) {
      clearTimeout(hideTimer);
      hideTimer = null;
    }
    set({ isOpen: false, message: "" });
  },
}));
