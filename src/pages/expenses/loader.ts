import getExpenses from "../../api/getExpenses";
import { ITransaction } from "../../interface/ITransactions";

export async function loaderExpenses() {
  const data: Array<ITransaction> = await getExpenses();
  return data;
}
