import { create } from "zustand";
import { ISearchSlice, createSearchSlice } from "./createSearchSlice.ts";
import { IThemeSlice, createThemeSlice } from "./createThemeSlice.ts";
import { IFilterRangeSlice, createFilterRangeSlice } from "./createFilterRangeSlice.ts";
import { INewTransactionSlice, createTransactionSlice } from "./createTransactionSlice.ts";
import { createDateRangeFilterSlice, IDateRangeFilter } from "./createDateRangeFilterSlice.ts";

export const useBoundStore = create<ISearchSlice & IThemeSlice & IFilterRangeSlice & INewTransactionSlice & IDateRangeFilter>()((...a) => ({
  ...createSearchSlice(...a),
  ...createThemeSlice(...a),
  ...createFilterRangeSlice(...a),
  ...createTransactionSlice(...a),
  ...createDateRangeFilterSlice(...a)
}));

