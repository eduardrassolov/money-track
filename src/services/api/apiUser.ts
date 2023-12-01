import { TLogin } from "../../pages/authorization/login/login.type";
import supabase from "../supabase";

export async function apiLogin({ email, password }: TLogin) {
    const { data, error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) {
        throw error;
    }
    return data;
}

export async function apiLogout() {
    const { error } = await supabase.auth.signOut();

    if (error) {
        throw error.message;
    }
}

export async function apiSignUp(email: string, password: string, firstName: string, lastName: string) {
    const { data, error } = await supabase.auth.signUp({
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
    console.log(data);

    const { user } = data;
    if (!user) {
        return { error };
    }

    await createSettingsForNewUser(user.id);

    return { data };
}

async function createSettingsForNewUser(userId: string) {
    const defaultCurrencyId = "ffcb6d59-a81a-4d9d-a821-36e33e84e683";

    await supabase.from("Settings").insert({ userId, defaultCurrencyId });
}
