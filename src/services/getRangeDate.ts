import { format, subDays, subHours, subMonths, subYears } from "date-fns";

export default function getRangeDates(range: string) {
  const now = new Date();
  let date;

  switch (range) {
    case "today":
      date = new Date();
      break;
    case "week":
      date = subDays(now, 7);
      break;
    case "month":
      date = new Date(`${now.getFullYear()}-${now.getMonth() + 1}-01`);
      break;
    case "year":
      date = new Date(`${now.getFullYear() -1 }-01-01`);
      break; 
    case "all":
    default:
      return null;
  }
  const res = format(date, "yyyy-MM-dd");
  console.log(res);
  return res;
}
