import addTransaction from "../api/addTransaction";
import INewTransaction from "../interface/INewTransaction";

export default async function createTransaction(data: INewTransaction) {
  try {
    const res = await addTransaction(data);
    return res;
  } catch (error) {
    return error;
  }
}
