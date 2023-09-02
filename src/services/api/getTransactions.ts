import { ITransaction } from "../../interface/ITransactions";
import supabase from "../supabase";
import { GetAllTransactionsDTO } from "./dto/getTransactions.dto";

export const SELECT = {
  ALL_TRANSACTIONS: `
    id, amount, completed_at, description, 
    category!inner(id, name, type:type_transaction!inner(id, name))
  `,
};

export default async function getTransactions(filter, sortBy): Promise<Array<ITransaction>> {
  let query = supabase.from("transactions").select(SELECT.ALL_TRANSACTIONS);

  if (filter) {
    query = query.gt("completed_at", filter);
  }

  query = query.order(sortBy.field, { ascending: sortBy.direction === "asc" ? true : false });
  const { data } = await query;

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
