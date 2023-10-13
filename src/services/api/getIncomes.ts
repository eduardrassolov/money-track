import TYPES_TRANSACTION from "../../config/typeTransactions";
import { ITransaction } from "../../interface/ITransactions";
import { ILoaderTransaction } from "../../pages/transactions/loader";
import supabase from "../supabase";
import { SELECT } from "./getTransactions";

export default async function getIncomes({ filter, sortBy, userId }: ILoaderTransaction): Promise<Array<ITransaction>> {
  let query = supabase
    .from("transactions")
    .select(SELECT.ALL_TRANSACTIONS)
    .eq("profile_id", userId)
    .eq("Category.type.id", TYPES_TRANSACTION.INCOME);

  if (filter) {
    // query = query.lte("completed_at", new Date().toLocaleDateString()).gte("completed_at", filter);
    query = query.gt("completed_at", filter);
  }

  query = query.order(sortBy.field, { ascending: sortBy.direction === "asc" ? true : false });
  const { data } = await query;

  if (!data) {
    return new Array<ITransaction>();
  }

  //TODO remove any
  const allTransactions: Array<ITransaction> = data.map((transaction: any) => {
    return {
      id: transaction.id,
      description: transaction.description,
      amount: transaction.amount,
      type: { id: transaction.Category.type.id, name: transaction.Category.type.name },
      category: { id: transaction.Category.id, name: transaction.Category.name },
      completedAt: new Date(transaction.completed_at),
      profileId: transaction.profile_id,
      currency: transaction.currency,
    };
  });

  return allTransactions;
}
