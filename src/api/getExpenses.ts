import { ITransaction } from "../interface/ITransactions";
import supabase from "../services/supabase";
import { TransactionDTO } from "./dto/transactions.dto";
import { TYPES_TRANSACTION } from "./getIncomes";
import { QUERY } from "./getTransactions";

export default async function getExpenses(): Promise<Array<ITransaction>> {
  const { data } = await supabase
    .from("transactions")
    .select(QUERY.ALL_TRANSACTIONS)
    .eq("type_id", TYPES_TRANSACTION.EXPENSE);

  if (!data) {
    return new Array<ITransaction>();
  }

  console.log(data);

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
