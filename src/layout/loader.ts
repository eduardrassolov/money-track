import supabase from "../services/supabase";

export default async function loadData() {
  const data = supabase.from("category").select();
  console.log(data);

  return data;
}
