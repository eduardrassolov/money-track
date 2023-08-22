import getIncomes from "../../api/getIncomes";
import getTransactions from "../../api/getTransactions";
import { ITransaction } from "../../interface/ITransactions";

export async function loaderTransactions() {
  const data: Array<ITransaction> = await getTransactions();
  return data;
}
