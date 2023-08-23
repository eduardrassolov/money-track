import getTransactions from "../../api/getTransactions";
import { ITransaction } from "../../interface/ITransactions";

export async function loaderDashboard(): Promise<ITransaction[]> {
  const data: Array<ITransaction> = await getTransactions(true);
  return data;
}
