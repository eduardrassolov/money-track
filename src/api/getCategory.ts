import supabase from "../services/supabase";

export default async function getCategory() {
  const { data } = await supabase.from("category").select();
  console.log(data);
}
