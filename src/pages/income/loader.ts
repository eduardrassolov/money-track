import getIncomes from "../../services/api/getIncomes";
import { ITransaction } from "../../interface/ITransactions";
import getRangeDates from "../../services/getRangeDate";
import { defaultSort } from "../transactions/loader";
import { Filter } from "../../types/filterBy.type";
import { SortBy } from "../../types/sortBy.type";

export async function loaderIncomes(userId: string, filter: Filter = null, sortBy: SortBy = { ...defaultSort }) {
  const filterByDate = !filter ? null : getRangeDates(filter);
  console.log(filterByDate);
  const data: Array<ITransaction> = await getIncomes({ filter: filterByDate, sortBy, userId });

  return data;
}
