import apiGetTransactionById from "../../services/api/apiGetTransactionById";

export default async function loaderTransactionById(id: string | undefined) {
  if (!id) {
    return null;
  }

  const data = await apiGetTransactionById(id);
  return data;
}
