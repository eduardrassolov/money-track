import { TABLE } from "../../config/dbTablesNames";
import supabase from "../supabase";

interface IApiCreateCategory {
  user_id: string;
  name: string;
  type_id: number;
}

export default async function apiCreateCategory({ user_id, name, type_id }: IApiCreateCategory) {
  const { data } = await supabase.from(TABLE.CATEGORY).insert([{ name, user_id, type_id }]).select();
  return data;
}
