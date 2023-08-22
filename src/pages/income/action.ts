import TYPES_TRANSACTION from "../../config/typeTransactions";
import addTransaction from "../../api/addTransaction";
import INewTransaction from "../../interface/INewTransaction";

export default async function actionIncomes(request: Request) {
  const formData = await request.formData();

  const description = formData.get("description");
  const amount = formData.get("amount");
  const completed_at = formData.get("completed_at");

  if (!description || !amount || !completed_at) {
    console.log("No data");
    return;
  }

  const data: INewTransaction = {
    description: description.toString(),
    amount: Number(amount),
    completedAt: completed_at.toString(),
    typeId: TYPES_TRANSACTION.INCOME,
  };

  return await addTransaction({ ...data });
}
