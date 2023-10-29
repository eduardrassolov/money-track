import { StateCreator } from "zustand";

export interface INewTransactionSlice {
  description: string;
  amount?: number;
  completedAt?: string;
  currencyId?: string;
  userId?: string;

  updateData: (key: string, value: string) => void;
}

export const createTransactionSlice: StateCreator<INewTransactionSlice> = (set) => ({
  description: "",

  updateData: (key: string, value: string) =>
    set(() => ({
      [key]: value,
    })),
});
