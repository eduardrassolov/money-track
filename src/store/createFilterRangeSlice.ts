import { StateCreator } from "zustand";
import dayjs from "dayjs";
import { RangeDate } from "./storeConfig";

export interface IFilterRangeSlice {
  filterRange: RangeDate;
  setFilterRange: (fromTo: RangeDate) => void;
}

export const createFilterRangeSlice: StateCreator<IFilterRangeSlice> = (set) => ({
  filterRange: {
    from: dayjs(new Date()).startOf("month").format("YYYY-MM-DD"),
    to: dayjs(new Date()).format("YYYY-MM-DD"),
  },
  setFilterRange: (fromTo: RangeDate) => set(() => ({ filterRange: fromTo })),
});
