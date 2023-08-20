import getIncomes from "../../api/getIncomes";
import { ITransaction } from "../../interface/ITransactions";

export async function loaderIncomes() {
  const data: Array<ITransaction> = await getIncomes();
  return data;
}
