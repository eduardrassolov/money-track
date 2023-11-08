import dayjs from "dayjs";
import { StateCreator } from "zustand";

export type Range = string | [string, string] | null | Date | [Date, Date];

export interface IDateRangeFilter {
  range: Range;
  changeRange: (newRange: Range) => void;
}

export const createDateRangeFilterSlice: StateCreator<IDateRangeFilter> = (set) => ({
  range: [dayjs(new Date()).startOf("month").format("DD-MMM-YYYY"), dayjs(new Date()).format("DD-MMM-YYYY")],
  changeRange: (newRange: Range) => set(() => ({ range: newRange })),
});
