import { create } from "zustand";

interface TerminalState {
  isOpen: boolean;
  toggle: () => void;
}

export const useTerminalStore = create<TerminalState>((set) => ({
  isOpen: false,
  toggle: () => set((state) => ({ isOpen: !state.isOpen })),
}));
