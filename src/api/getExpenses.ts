import TYPES_TRANSACTION from "../config/typeTransactions";
import { ITransaction } from "../interface/ITransactions";
import supabase from "../services/supabase";
import { TransactionDTO } from "./dto/transactions.dto";
import { QUERY } from "./getTransactions";

export default async function getExpenses(): Promise<Array<ITransaction>> {
  const { data } = await supabase
    .from("transactions")
    .select(QUERY.ALL_TRANSACTIONS)
    .eq("type_id", TYPES_TRANSACTION.EXPENSE);

  if (!data) {
    return new Array<ITransaction>();
  }

  const allTransactions: Array<ITransaction> = data.map((transaction: TransactionDTO) => {
    return {
      id: transaction.id,
      description: transaction.description,
      amount: transaction.amount,
      typeTransaction: transaction.type_transaction,
      completedAt: new Date(transaction.completed_at),
    };
  });

  return allTransactions;
}
