import { TABLE } from "../../config/dbTablesNames";
import { SUPABASE_ERROR_CODE } from "../../config/sbErrorCodes";
import supabase from "../supabase";

export default async function apiDeleteCategory(id: string) {
  try {
    const { data, error } = await supabase.from(TABLE.CATEGORY).delete().eq("id", id);
    if (error) {
      throw new Error(error.code);
    }
    return data;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(SUPABASE_ERROR_CODE.get(error.message));
    }
  }
}
