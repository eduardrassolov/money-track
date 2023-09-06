import { ILogin } from "../../pages/login/useLogin";
import supabase from "../supabase";

export async function login({ email, password }: ILogin) {
  const { data, error } = await supabase.auth.signInWithPassword({ email, password });

  if (error) {
    throw error.message;
  }

  return data;
}

export async function apiLogout() {
  const { error } = await supabase.auth.signOut();

  if (error) {
    throw error.message;
  }
}

export async function apiSignUp(email: string, password: string, fisrtName: string, lastName: string) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        fisrtName,
        lastName,
      },
    },
  });
  return { data, error };
}