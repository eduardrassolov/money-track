import getExpenses from "../../services/api/getExpenses";
import { ITransaction } from "../../interface/ITransactions";
import getRangeDates from "../../services/getRangeDate";
import { defaultSort } from "../transactions/loader";
import { Filter } from "../../types/filterBy.type";
import { SortBy } from "../../types/sortBy.type";

// export async function loaderExpenses({ filter = null, sortBy = { ...defaultSort }, userId }: ILoaderTransaction) {
export async function loaderExpenses(userId: string, filter: Filter = null, sortBy: SortBy = { ...defaultSort }) {
  const filterByDate = !filter ? null : getRangeDates(filter);
  console.log("test", userId, filter, sortBy);
  const data: Array<ITransaction> = await getExpenses({ filter: filterByDate, sortBy, userId });

  return data;
}
