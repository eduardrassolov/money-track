import { create } from "zustand";
import { ISearchSlice, createSearchSlice } from "./searchSlice.ts";
import { IThemeSlice, createThemeSlice } from "./themeSlice.ts";
import { IFilterRangeSlice, createFilterRangeSlice } from "./filterRangeSlice.ts";
import { INewTransactionSlice, createTransactionSlice } from "./newTransactionSlice.ts";

export const useBoundStore = create<ISearchSlice & IThemeSlice & IFilterRangeSlice & INewTransactionSlice>()((...a) => ({
  ...createSearchSlice(...a),
  ...createThemeSlice(...a),
  ...createFilterRangeSlice(...a),
  ...createTransactionSlice(...a)

}));

