import getIncomes from "../../services/api/getIncomes";
import { ITransaction } from "../../interface/ITransactions";
import getRangeDates from "../../services/getRangeDate";
import { defaultSort } from "../transactions/loader";
import { Filter } from "../../types/filterBy.type";
import { SortBy } from "../../types/sortBy.type";
import dayjs from "dayjs";

export async function loaderIncomes(
  userId: string,
  filter: Filter = null,
  sortBy: SortBy = { ...defaultSort },
  from: string = "",
  to: string = ""
) {
  const filterByDate = !filter ? null : getRangeDates(filter);
  console.log(filterByDate);
  const data: Array<ITransaction> = await getIncomes({ filter: filterByDate, sortBy, userId });

  if (from && to) {
    const filteredData = data.filter((transaction) => {
      const date = dayjs(transaction.completedAt).format("YYYY-MM-DD");
      if (dayjs(date).isBetween(from, to, "day", "[]")) {
        console.log(true, date, from, to);
        return transaction;
      }
    });
    return filteredData;
  }

  return data;
}
