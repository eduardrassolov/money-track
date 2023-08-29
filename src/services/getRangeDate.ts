import { format, subDays, subHours, subMonths, subYears } from "date-fns";

export default function getRangeDates(range: string) {
  const now = new Date();
  let date;

  switch (range) {
    case "today":
      date = subHours(now, 24);
      break;
    case "week":
      date = subDays(now, 7);
      break;
    case "month":
      date = subMonths(now, 1);
      break;
    case "year":
      date = subYears(now, 1);
      break;
    case "all":
    default:
      return null;
  }
  return format(date, "yyyy-MM-dd");
}
