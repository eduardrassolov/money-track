import { ITransaction } from "../interface/ITransactions";
import supabase from "../services/supabase";
import { TransactionDTO } from "./dto/transactions.dto";

export const QUERY = {
  ALL_TRANSACTIONS: `
    amount, completed_at, description, id, 
    type_transaction(id, name)
  `,
};

export default async function getTransactions(): Promise<Array<ITransaction>> {
  const { data } = await supabase.from("transactions").select(QUERY.ALL_TRANSACTIONS);

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
