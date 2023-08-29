import getExpenses from "../../api/getExpenses";
import { ITransaction } from "../../interface/ITransactions";
import getRangeDates from "../../services/getRangeDate";

export async function loaderExpenses({ filter, sortBy }) {
  const filterByDate = !filter ? null : getRangeDates(filter);
  const data: Array<ITransaction> = await getExpenses(filterByDate, sortBy);

  return data;
}
