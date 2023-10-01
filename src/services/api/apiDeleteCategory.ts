import { TABLE } from "../../config/dbTablesNames";
import supabase from "../supabase";

export default async function apiDeleteCategory(id: string) {
  try {
    const { data, error } = await supabase.from(TABLE.CATEGORY).delete().eq("id", id);
    if (error) {
      throw error;
    }
    return data;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
    // switch (error?.code) {
    //   case "23503":
    //     throw new Error("This category is used in a transaction, please delete the transaction first");
    //   default:
    //     throw new Error(error.message);
    // }
  }
}
