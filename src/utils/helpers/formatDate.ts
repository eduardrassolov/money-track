export const formatDateToChart = (date: Date) =>
  date.toLocaleDateString("en-GB", { day: "numeric", month: "numeric", year: "2-digit" });

export const formatDate = (date: string): string =>
  new Date(date).toLocaleDateString("en-GB", { year: "numeric", month: "short", day: "numeric" });
