import supabase from "../supabase";

export default async function apiUpdateTransaction({ description, amount, completed_at, category, id }) {
  const { data, error } = await supabase
    .from("transactions")
    .update({ description, amount, category_id: category, completed_at })
    .eq("id", id)
    .select();

  console.log(data, error);
  return data;
}
