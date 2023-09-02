import INewTransaction from "../../interface/IInsertTransaction";
import supabase from "../supabase";
import { CreateTransactionDTO } from "./dto/createTransaction.dto";

export default async function createTransaction(transaction: INewTransaction) {
  try {
    const newTransactionDTO: CreateTransactionDTO = {
      amount: transaction.amount,
      category_id: transaction.categoryId,
      completed_at: transaction.completedAt,
      description: transaction.description,
      user_id: 1,
    };

    const { data, error } = await supabase.from("transactions").insert([newTransactionDTO]);

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
