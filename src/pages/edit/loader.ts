import apiGetTransactionById from "../../services/api/apiGetTransactionById";

export default async function loaderTransactionById(id: string | undefined) {
  console.log("sadsadasd");
  if (!id) {
    return null;
  }

  const data = await apiGetTransactionById(id);
  return data;
}
