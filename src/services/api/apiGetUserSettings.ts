import supabase from "../supabase";

export interface ISettings {
    defaultCurrencyId?: string;
    itemsPerPage?: number;
}

export async function apiGetUserSettings(userId: string) {
    const { data } = await supabase
        .from("Settings")
        .select("id, itemsPerPage, defaultCurrency:Currency!inner(id, name, symbol, shortName, code)")
        .eq("userId", userId)
        .single();

    return data;
}

export async function apiUpdateUserSettings({ userId, settings }: { userId: string; settings: ISettings }) {
    console.log("set", userId, settings);
    const { data, error } = await supabase
        .from("Settings")
        .update({ ...settings })
        .eq("userId", userId)
        .select();

    if (error) throw new Error(error.message);
    return data;
}
