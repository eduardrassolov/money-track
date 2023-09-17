import { InputsSettings } from "../../pages/settings/Settings.page";
import supabase from "../supabase";

export default async function apiUpdateUserDate({ firstName, lastName, currency }: InputsSettings) {
  const { data: user, error } = await supabase.auth.updateUser({data: { firstName, lastName, currency }});
  return { user, error };
}
