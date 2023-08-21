import INewTransaction from "../interface/INewTransaction";
import supabase from "../services/supabase";
import { InsertTransaction } from "./dto/createTransaction.dto";

export default async function addTransaction(transaction: INewTransaction) {
  try {
    const transactionDTO: InsertTransaction = {
      amount: transaction.amount,
      completed_at: transaction.completedAt,
      description: transaction.description,
      type_id: transaction.type_id,
      user_id: 1,
    };

    const { data, error } = await supabase
      .from("transactions")
      .insert({ ...transactionDTO })
      .select();

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
