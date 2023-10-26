import { StateCreator } from "zustand";

export interface ISearchSlice {
  search: string;
  setSearch: (value: string) => void;
}

export const createSearchSlice: StateCreator<ISearchSlice> = (set) => ({
  search: "",
  setSearch: (value: string) => set(() => ({ search: value })),
});
