import { TABLE } from "../../config/dbTablesNames";
import { SUPABASE_ERROR_CODE } from "../../config/errorCode";
import supabase from "../supabase";

interface IApiCreateCategory {
  user_id: string;
  name: string;
  type_id: number;
}

export default async function apiCreateCategory({ user_id, name, type_id }: IApiCreateCategory) {
  try {
    const { data, error } = await supabase.from(TABLE.CATEGORY).insert([{ name, user_id, type_id }]).select();
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
