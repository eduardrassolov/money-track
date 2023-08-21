import INewTransaction from "../interface/INewTransaction";
import supabase from "../services/supabase";
import { InsertTransaction } from "./dto/createTransaction.dto";

export default async function addTransaction(transaction: INewTransaction) {
  const transactionDTO: InsertTransaction = {
    amount: transaction.amount,
    completed_at: transaction.completedAt,
    description: transaction.description,
    type_id: transaction.type_id,
    user_id: 1,
  };

  try {
    const { data, error } = await supabase
      .from("transactions")
      .insert({ ...transactionDTO })
      .select();

    if (error) {
      throw error;
    }

    return data;
  } catch (error) {
    console.log(error);
  }
}
