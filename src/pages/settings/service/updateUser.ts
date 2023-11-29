import supabase from "../../../services/supabase";

export default async function updateUser(firstName: string, lastName: string) {
    const { data: user, error } = await supabase.auth.updateUser({ data: { firstName, lastName } });
    return { user, error };
}
