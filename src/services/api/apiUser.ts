import { TLogin } from "../../pages/authorization/login/login.type";
import supabase from "../supabase";

export async function apiLogin({ email, password }: TLogin) {
    const { data, error } = await supabase.auth.signInWithPassword({ email, password });

    if (error) {
        throw error.message;
    }

    console.log(data);
    return data;
}

export async function apiLogout() {
    const { error } = await supabase.auth.signOut();

    if (error) {
        throw error.message;
    }
}

export async function apiSignUp(email: string, password: string, firstName: string, lastName: string) {
    const { error } = await supabase.auth.signUp({
        email,
        password,
        options: {
            data: {
                firstName,
                lastName,
                currency: "usd",
            },
        },
    });

    return { error };
}
