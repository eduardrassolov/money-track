export const formatDateToChart = (date: Date) =>
  date.toLocaleDateString("en-GB", { day: "numeric", month: "numeric", year: "2-digit" });

export const formatDate = (date: string, options = { year: "numeric", month: "short", day: "numeric" }): string =>
  new Date(date).toLocaleDateString("en-GB", options);
