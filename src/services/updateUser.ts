import { InputsSettings } from "../pages/settings/Settings.page";
import apiUpdateUserDate from "./api/apiUpdateUser";

export default async function updateUser(data: InputsSettings) {
  return await apiUpdateUserDate(data);
}
