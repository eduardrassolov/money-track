import supabase from "../supabase";

export default async function apiGetCurrency() {
  let { data } = await supabase.from("Currency").select().order("name", { ascending: true });

  return data;
}
