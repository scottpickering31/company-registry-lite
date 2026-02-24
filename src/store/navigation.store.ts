import { create } from "zustand";

type State = {
  divider: boolean;
};

type Action = {
  setDivider: (divider: boolean) => void;
};

export const useNavigationStore = create<State & Action>((set) => ({
  divider: false,
  setDivider: (divider) => set({ divider }),
}));
