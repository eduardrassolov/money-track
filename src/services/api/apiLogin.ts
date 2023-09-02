import supabase from "../supabase";

export async function login({ email, password }) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  console.log(data, error);
  if (error) throw error.message;

  return data;
}
