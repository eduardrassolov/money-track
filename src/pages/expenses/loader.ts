import getExpenses from "../../services/api/getExpenses";
import { ITransaction } from "../../interface/ITransactions";
import getRangeDates from "../../services/getRangeDate";
import { ILoaderTransaction, defaultSort } from "../transactions/loader";

export async function loaderExpenses({ filter = null, sortBy = { ...defaultSort }, userId }: ILoaderTransaction) {
  const filterByDate = !filter ? null : getRangeDates(filter);
  const data: Array<ITransaction> = await getExpenses({ filter: filterByDate, sortBy, userId });

  return data;
}
