import { ICategory } from "../../interface/ICategory";
import supabase from "../supabase";

export default async function getCategory(type: number) {
  const { data } = await supabase.from("category").select().eq("type_id", type);

  if (!data) {
    return null;
  }

  return data as Array<ICategory>;
}
