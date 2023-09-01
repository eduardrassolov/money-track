export const formatDateToChart = (date: Date) => date.toLocaleDateString("en-GB", { day: "numeric", month: "numeric" });
export const formatDate = (date: string): string =>
  new Date(date).toLocaleDateString("en-GB", { year: "numeric", month: "short", day: "numeric" });
