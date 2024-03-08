import { create } from "zustand";

export const useMoreDetail = create((set) => ({
  modalContent: null,
  setModallContent: (d) => {
    set(() => ({
      modalContent: d,
    }));
  },
}));
