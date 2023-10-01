import supabase from "../supabase";

interface IUpdateProps {
  description: string;
  amount: number;
  completed_at: string;
  category: string;
  id: number;
}

export default async function apiUpdateTransaction({ description, amount, completed_at, category, id }: IUpdateProps) {
  try {
    const { data, error } = await supabase
      .from("transactions")
      .update({ description, amount, category_id: category, completed_at: completed_at })
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
