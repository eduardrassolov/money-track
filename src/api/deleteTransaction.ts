import supabase from "../services/supabase";

export default async function deleteTransaction(id: number) {
  const { error } = await supabase.from("transactions").delete().eq("id", id);
  return error;
}
