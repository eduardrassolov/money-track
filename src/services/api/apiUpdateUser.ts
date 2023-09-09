import supabase from "../supabase";

export default async function apiUpdateUserDate(firstName: string, lastName: string, currency: string) {
  const { user, error } = await supabase.auth.updateUser({
    data: { firstName, lastName, currency },
  });
  return { user, error };
}
