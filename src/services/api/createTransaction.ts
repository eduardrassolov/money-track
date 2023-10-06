import INewTransaction from "../../interface/IInsertTransaction";
import supabase from "../supabase";
import { ICreateTransactionDTO } from "./dto/createTransaction.dto";

export default async function apiCreateTransaction(transaction: INewTransaction) {
  try {
    const newTransactionDTO: ICreateTransactionDTO = {
      amount: transaction.amount,
      category_id: transaction.categoryId,
      completed_at: transaction.completedAt,
      description: transaction.description,
      profile_id: transaction.profileId,
      currency_id: transaction.currencyId,
    };
    const { error } = await supabase.from("transactions").insert([newTransactionDTO]);

    if (error) {
      throw error;
    }

    return { error: {} };
  } catch (err) {
    if (err instanceof Error) {
      return { data: {}, error: err?.message || "Something went wrong" };
    }
  }
}
