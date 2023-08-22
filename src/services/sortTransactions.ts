import { ITransaction } from "../interface/ITransactions";

export default function sortByDate(arr: Array<ITransaction>) {
  return arr.sort((a, b) => {
    return new Date(b.completedAt).getTime() - new Date(a.completedAt).getTime();
  });
}
