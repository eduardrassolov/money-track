import addTransaction from "../../api/addTransaction";
import TYPES_TRANSACTION from "../../config/typeTransactions";
import INewTransaction from "../../interface/INewTransaction";

export default async function actionExpenses(request: Request) {
  const formData = await request.formData();

  // TODO - refactor validation
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
    typeId: TYPES_TRANSACTION.EXPENSE,
  };

  return await addTransaction({ ...data });
}
