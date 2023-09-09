import supabase from "../supabase";

export default async function apiGetCurrency() {
  let { data, error } = await supabase.from("Currency").select("*");

  return data;
}
