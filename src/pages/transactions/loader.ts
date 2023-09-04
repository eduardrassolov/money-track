import getTransactions from "../../services/api/getTransactions";
import { ITransaction } from "../../interface/ITransactions";
import getRangeDates from "../../services/getRangeDate";
import { Filter } from "../../types/filterBy.type";
import { SortBy } from "../../types/sortBy.type";

export interface ILoaderTransaction {
  filter: Filter;
  sortBy: SortBy;
  userId: string;
}
export const defaultSort: SortBy = { field: "completed_at", direction: "desc" };

export async function loaderTransactions({ filter = null, sortBy = { ...defaultSort }, userId }: ILoaderTransaction) {
  const filterByDate = !filter ? null : getRangeDates(filter);
  const data: Array<ITransaction> = await getTransactions({ filter: filterByDate, sortBy, userId });

  return data;
}
