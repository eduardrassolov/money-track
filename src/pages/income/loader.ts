import getIncomes from "../../services/api/getIncomes";
import { ITransaction } from "../../interface/ITransactions";
import getRangeDates from "../../services/getRangeDate";
import { ILoaderTransaction, defaultSort } from "../transactions/loader";

export async function loaderIncomes({ filter = null, sortBy = { ...defaultSort }, userId }: ILoaderTransaction) {
  const filterByDate = !filter ? null : getRangeDates(filter);
  const data: Array<ITransaction> = await getIncomes({ filter: filterByDate, sortBy, userId });

  return data;
}
