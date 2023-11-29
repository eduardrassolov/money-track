import { TimeRangePickerProps } from "antd";
import dayjs from "dayjs";

export const rangePresets: TimeRangePickerProps["presets"] = [
    { label: "Today", value: [dayjs(), dayjs()] },
    { label: "Last 7 Days", value: [dayjs().add(-7, "d"), dayjs()] },
    { label: "This Week", value: [dayjs().startOf("week"), dayjs()] },
    { label: "Last 14 Days", value: [dayjs().add(-14, "d"), dayjs()] },
    { label: "Last 30 Days", value: [dayjs().add(-30, "d"), dayjs()] },
    { label: "This month", value: [dayjs().startOf("month"), dayjs()] },
    { label: "Last 90 Days", value: [dayjs().add(-90, "d"), dayjs()] },
    { label: "This year", value: [dayjs().startOf("year"), dayjs()] },
];
