import getExpenses from "../../api/getExpenses";
import { ITransaction } from "../../interface/ITransactions";
import getRangeDates from "../../services/getRangeDate";
import { ILoaderTransaction, defaultSort } from "../transactions/loader";

export async function loaderExpenses({ filter = null, sortBy = { ...defaultSort } }: ILoaderTransaction) {
  const filterByDate = !filter ? null : getRangeDates(filter);
  const data: Array<ITransaction> = await getExpenses(filterByDate, sortBy);

  return data;
}
