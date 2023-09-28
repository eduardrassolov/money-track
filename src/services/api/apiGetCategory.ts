import { TABLE } from "../../config/dbTablesNames";
import { ITransactionCategory } from "../../interface/ITransactionCategory";
import supabase from "../supabase";

export async function apiGetCategories(type: number) {
  const { data } = await supabase.from(TABLE.CATEGORY)
    .select()
    .eq("isDefault", true)
    .eq("type_id", type)
    .order("name", { ascending: true });
 
  if (!data) {
    return null;
  }

  return data as Array<ITransactionCategory>;
}


export async function apiGetUserCategory(type: number, userId: string) {
  const { data } = await supabase.from(TABLE.CATEGORY)
    .select()
    .eq("user_id", userId)
    .eq("type_id", type)
    .order("name", { ascending: true });
 
  if (!data) {
    return null;
  }

  return data as Array<ITransactionCategory>;
}