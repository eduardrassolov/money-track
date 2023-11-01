import supabase from "../supabase";

export default async function apiUpdateProfileData({ firstName, lastName }) {
  const { data: user, error } = await supabase.auth.updateUser({ data: { firstName, lastName } });
  return { user, error };
}
