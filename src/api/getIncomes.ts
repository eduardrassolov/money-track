import TYPES_TRANSACTION from "../config/typeTransactions";
import { ITransaction } from "../interface/ITransactions";
import supabase from "../services/supabase";
import { TransactionDTO } from "./dto/transactions.dto";
import { SELECT } from "./getTransactions";

export default async function getIncomes(): Promise<Array<ITransaction>> {
  const { data } = await supabase
    .from("transactions")
    .select(SELECT.ALL_TRANSACTIONS)
    .eq("type_id", TYPES_TRANSACTION.INCOME)
    .order("completed_at", { ascending: false });

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
