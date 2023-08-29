import getIncomes from "../../api/getIncomes";
import { ITransaction } from "../../interface/ITransactions";
import getRangeDates from "../../services/getRangeDate";

export async function loaderIncomes({ filter, sortBy }) {
  const filterByDate = !filter ? null : getRangeDates(filter);
  const data: Array<ITransaction> = await getIncomes(filterByDate, sortBy);

  return data;
}
