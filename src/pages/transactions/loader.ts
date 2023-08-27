import getTransactions from "../../api/getTransactions";
import { ITransaction } from "../../interface/ITransactions";

export async function loaderTransactions(request: Request) {
  const url = new URL(request.url);
  console.log(url);

  const data: Array<ITransaction> = await getTransactions();
  return data;
}
