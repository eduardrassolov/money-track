import { ITransaction } from "../../interface/ITransactions";

export const searchTransactionsByMask = (transactions: ITransaction[], mask: string): ITransaction[] =>
  transactions?.filter((transaction) => {
    return transaction.description.toLowerCase().includes(mask.toLowerCase());
  });
