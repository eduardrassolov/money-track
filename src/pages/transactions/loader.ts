import getTransactions from "../../api/getTransactions";
import { ITransaction } from "../../interface/ITransactions";
import getRangeDates from "../../services/getRangeDate";

export async function loaderTransactions({ filter = null, sortBy = { field: "completed_at", direction: "desc" } }) {
  const filterByDate = !filter ? null : getRangeDates(filter);

  const data: Array<ITransaction> = await getTransactions(filterByDate, sortBy);
  return data;
}
