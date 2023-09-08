import supabase from "../supabase";

export default async function apiUpdateTransaction({
  description,
  amount,
  completed_at,
  category,
  id,
}: {
  description: string;
  amount: number;
  completed_at: string | Date;
  category: number;
  id: number;
}) {
  const { data, error } = await supabase
    .from("transactions")
    .update({ description, amount, category_id: category, completed_at: completed_at.toString() })
    .eq("id", id)
    .select();

  console.log(data, error);
  return data;
}
