import dayjs from "dayjs";

export const filterList = [
    {
        id: "custom",
        label: "Custom",
        range: [dayjs().format("DD-MMM-YYYY"), dayjs().format("DD-MMM-YYYY")],
    },
    {
        id: "day",
        label: "Day",
        range: [dayjs().format("DD-MMM-YYYY"), dayjs().format("DD-MMM-YYYY")],
    },
    {
        id: "week",
        label: "Week",
        range: [dayjs().add(-7, "d").format("DD-MMM-YYYY"), dayjs().format("DD-MMM-YYYY")],
    },
    {
        id: "month",
        label: "Month",
        range: [dayjs().add(-30, "d").format("DD-MMM-YYYY"), dayjs().format("DD-MMM-YYYY")],
    },
    {
        id: "3months",
        label: "3 Months",
        range: [dayjs().add(-90, "d").format("DD-MMM-YYYY"), dayjs().format("DD-MMM-YYYY")],
    },
];
