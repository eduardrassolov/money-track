import INewTransaction from "../interface/IInsertTransaction";
import supabase from "../services/supabase";
import { InsertTransactionDTO } from "./dto/createTransaction.dto";

export default async function addTransaction(transaction: INewTransaction) {
  console.log("income data ", transaction);

  try {
    const transactionDTO: InsertTransactionDTO = {
      amount: transaction.amount,
      completed_at: transaction.completedAt,
      description: transaction.description,
      category_id: transaction.categoryId,
      user_id: 1,
    };

    const { data, error } = await supabase
      .from("transactions")
      .insert({ ...transactionDTO })
      .select()
      .order("completed_at", { ascending: false });

    if (error) {
      throw error;
    }

    return { data, error: null };
  } catch (err) {
    if (err instanceof Error) {
      return { data: null, error: err?.message || "Something went wrong" };
    }
  }
}
