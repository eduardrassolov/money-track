import { InputsSettings } from "../Settings.page";
import supabase from "../../../services/supabase";

export default async function apiUpdateUserDate({ firstName, lastName, currency }: InputsSettings) {
    const { data: user, error } = await supabase.auth.updateUser({ data: { firstName, lastName, currency } });
    return { user, error };
}
