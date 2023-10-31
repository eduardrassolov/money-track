import { create } from "zustand";
import { ISearchSlice, createSearchSlice } from "./createSearchSlice.ts";
import { IThemeSlice, createThemeSlice } from "./createThemeSlice.ts";
import { IFilterRangeSlice, createFilterRangeSlice } from "./createFilterRangeSlice.ts";
import { INewTransactionSlice, createTransactionSlice } from "./createTransactionSlice.ts";

export const useBoundStore = create<ISearchSlice & IThemeSlice & IFilterRangeSlice & INewTransactionSlice>()((...a) => ({
  ...createSearchSlice(...a),
  ...createThemeSlice(...a),
  ...createFilterRangeSlice(...a),
  ...createTransactionSlice(...a)
}));

