import { ITransaction } from "../interface/ITransactions";
import supabase from "../services/supabase";
import { GetAllTransactionsDTO } from "./dto/getTransactions.dto";

export const SELECT = {
  ALL_TRANSACTIONS: `
    id, amount, completed_at, description, 
    category!inner(id, name, type:type_transaction!inner(id, name))
  `,
};

export default async function getTransactions(sorting = false): Promise<Array<ITransaction>> {
  const { data } = await supabase
    .from("transactions")
    .select(SELECT.ALL_TRANSACTIONS)
    .order("completed_at", { ascending: sorting });

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
