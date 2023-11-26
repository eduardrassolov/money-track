import supabase from "../../../../services/supabase";

export default async function getAppSettings(userId: string) {
    const { data, error } = await supabase.from("Settings").select().eq("userId", userId).single();
    return data;
}
