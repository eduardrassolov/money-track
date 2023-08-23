import { FC } from "react";
import { ITransaction } from "../interface/ITransactions";

type SortDirection = "asc" | "desc";
interface ISortedProps {
  transactions: Array<ITransaction>;
  direction?: SortDirection;
}

const sortByDate: FC<ISortedProps> = ({ transactions, direction = "asc" }) => {
  return transactions.toSorted((a: ITransaction, b: ITransaction) => {
    if (direction === "asc") {
      return new Date(b.completedAt).getTime() - new Date(a.completedAt).getTime();
    } else if (direction === "desc") {
      return new Date(a.completedAt).getTime() + new Date(b.completedAt).getTime();
    }
  });
};
export default sortByDate;
