import supabase from "../supabase";

export default async function apiDeleteTransaction(id: number) {
  const { error } = await supabase.from("transactions").delete().eq("id", id);
  return error;
}
