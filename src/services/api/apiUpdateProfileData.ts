import supabase from "../supabase";

interface IApiUpdProfileData {
  firstName: string;
  lastName: string;
}

export default async function apiUpdateProfileData({ firstName, lastName }: IApiUpdProfileData) {
  const { data: user, error } = await supabase.auth.updateUser({ data: { firstName, lastName } });
  return { user, error };
}
