import { create } from "zustand";
import { ISearchSlice, createSearchSlice } from "./searchSlice";
import { IThemeSlice, createThemeSlice } from "./themeSlice";
import { IFilterRangeSlice, createFilterRangeSlice } from "./filterRangeSlice";

export const useBoundStore = create<ISearchSlice & IThemeSlice & IFilterRangeSlice>()((...a) => ({
  ...createSearchSlice(...a),
  ...createThemeSlice(...a),
  ...createFilterRangeSlice(...a)
}));

