export type Option = {
  value: string;
  text: string;
};

export const FILTER_DATE_OPTIONS: Array<Option> = [
  {
    value: "all",
    text: "All",
  },
  {
    value: "today",
    text: "Today",
  },
  {
    value: "week",
    text: "Last Week",
  },
  {
    value: "month",
    text: "Last Month",
  },
  {
    value: "year",
    text: "Last Year",
  },
];

export const FILTER_DASHBOARD: Array<Option> = [
  {
    value: "all",
    text: "All",
  },
  {
    value: "week",
    text: "Last Week",
  },
  {
    value: "month",
    text: "Last Month",
  },
  {
    value: "year",
    text: "Last Year",
  },
];

export const FILTER_KEYS = {
  DATE: "date",
};
