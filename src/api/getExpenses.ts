import TYPES_TRANSACTION from "../config/typeTransactions";
import { ITransaction } from "../interface/ITransactions";
import supabase from "../services/supabase";
import { GetAllTransactionsDTO } from "./dto/getTransactions.dto";
import { SELECT } from "./getTransactions";

export default async function getExpenses(): Promise<Array<ITransaction>> {
  const { data } = await supabase
    .from("transactions")
    .select(SELECT.ALL_TRANSACTIONS)
    .eq("category.type.id", TYPES_TRANSACTION.EXPENSE)
    .order("completed_at", { ascending: false });

  if (!data) {
    return new Array<ITransaction>();
  }

  const allTransactions: Array<ITransaction> = data.map((transaction: GetAllTransactionsDTO) => {
    return {
      id: transaction.id,
      description: transaction.description,
      amount: transaction.amount,
      type: { id: transaction.category.type.id, name: transaction.category.type.name },
      category: { id: transaction.category.id, name: transaction.category.name },
      completedAt: new Date(transaction.completed_at),
    };
  });

  return allTransactions;
}
