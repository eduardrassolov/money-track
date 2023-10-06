import supabase from "../supabase";

interface IUpdateProps {
  description: string;
  amount: number;
  completed_at: string;
  category: string;
  id: number;
  currency_id: string;
}

export default async function apiUpdateTransaction({
  description,
  amount,
  completed_at,
  category,
  id,
  currency_id,
}: IUpdateProps) {
  try {
    const { data, error } = await supabase
      .from("transactions")
      .update({ description, amount, category_id: category, completed_at: completed_at, currency_id })
      .eq("id", id)
      .select();

    if (error) {
      throw new Error(error.message);
    }

    return data;
  } catch (e) {
    throw e;
  }
}
