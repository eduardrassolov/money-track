import getExpenses from "../../api/getExpenses";
import { ITransaction } from "../../interface/ITransactions";
import getRangeDates from "../../services/getRangeDate";
import { SortBy } from "../transactions/TransactionArr";

export interface Iloader {
  filter: string | null;
  sortBy: SortBy;
}

export async function loaderExpenses({ filter, sortBy }: Iloader) {
  const filterByDate = !filter ? null : getRangeDates(filter);
  const data: Array<ITransaction> = await getExpenses(filterByDate, sortBy);

  return data;
}
