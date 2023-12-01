import { SELECT } from "../../pages/transactionView/loadTransactions";
import supabase from "../supabase";

export default async function apiGetTransactionById(id: string) {
    const { data, error } = await supabase.from("transactions").select(SELECT.FULL_TRANSACTION_INFO).eq("id", Number(id));
    console.log(data, error);

    return data;
}
