import { TABLE } from "../../config/dbTablesNames";
import supabase from "../supabase";

export default async function apiDeleteCategory(id: string){
    const {data} = await supabase.from(TABLE.CATEGORY).delete().eq("id", id)
    return data;
}