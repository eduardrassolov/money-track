import { TABLE } from "../../config/dbTablesNames";
import supabase from "../supabase";

export default async function apiCreateCategory({user_id, name, type_id}){
    const {data} = await supabase.from(TABLE.CATEGORY).insert([{name, user_id, type_id}]).select();
    return data;
}
