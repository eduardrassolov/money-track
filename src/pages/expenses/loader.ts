import getExpenses from "../../api/getExpenses";
import { ITransaction } from "../../interface/ITransactions";
import getRangeDates from "../../services/getRangeDate";

export interface Iloader {
  filter: string | null;
  sortBy: {
    field: string;
    direction: string;
  };
}

export async function loaderExpenses({ filter = null, sortBy = { field: "completed_at", direction: "desc" } }) {
  const filterByDate = !filter ? null : getRangeDates(filter);
  const data: Array<ITransaction> = await getExpenses(filterByDate, sortBy);

  return data;
}
