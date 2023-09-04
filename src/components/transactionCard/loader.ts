import getTransactions from "../../services/api/getTransactions";
import { ITransaction } from "../../interface/ITransactions";
import getRangeDates from "../../services/getRangeDate";
import { ILoaderTransaction, defaultSort } from "../../pages/transactions/loader";

export async function loaderTransactions({ filter = null, sortBy = { ...defaultSort }, userId }: ILoaderTransaction) {
  const filterByDate = !filter ? null : getRangeDates(filter);

  const data: Array<ITransaction> = await getTransactions({ filter: filterByDate, sortBy, userId });
  return data;
}
