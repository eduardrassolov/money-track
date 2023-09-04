import { ITransaction } from "../interface/ITransactions";

type SortDirection = "asc" | "desc";

function sortByDate(transactions: ITransaction[], direction: SortDirection = "asc"): ITransaction[] {
  const copyTransaction = [...transactions];

  return copyTransaction.sort((a, b) => {
    if (direction === "asc") {
      return new Date(b.completedAt).getTime() - new Date(a.completedAt).getTime();
    } else {
      return new Date(a.completedAt).getTime() + new Date(b.completedAt).getTime();
    }
  });
}
export default sortByDate;
