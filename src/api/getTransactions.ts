import { ITransaction } from "../interface/ITransactions";
import supabase from "../services/supabase";
import { TransactionDTO } from "./dto/transactions.dto";

export const SELECT = {
  ALL_TRANSACTIONS: `
    amount, completed_at, description, id, 
    type_transaction(id, name)
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
