import apiUpdateUserDate from "./api/apiUpdateUser";

export default async function updateUser(firstName: string, lastName: string, currency: string) {
  return await apiUpdateUserDate(firstName, lastName, currency);
}
