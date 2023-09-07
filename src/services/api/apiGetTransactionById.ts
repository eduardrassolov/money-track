import supabase from "../supabase";
import { SELECT } from "./getTransactions";

export default async function apiGetTransactionById(id: string) {
  const { data, error } = await supabase.from("transactions").select(SELECT.ALL_TRANSACTIONS).eq("id", Number(id));
  console.log(data, error);

  return data;
}
