import { ITransaction } from "../../interface/ITransactions";

export const searchTransactionsByMask = (transactions: ITransaction[] | undefined, mask: string) =>
  transactions?.filter((transaction) => {
    return transaction.description.toLowerCase().includes(mask.toLowerCase());
  });
