import addTransaction from "../../api/createTransaction";
import TYPES_TRANSACTION from "../../config/typeTransactions";
import INewTransaction from "../../interface/IInsertTransaction";

export default async function actionExpenses(request: Request) {
  const formData = await request.formData();

  // TODO - refactor validation
  const description = formData.get("description");
  const amount = formData.get("amount");
  const completed_at = formData.get("completed_at");
  const category = formData.get("category");

  if (!description || !amount || !completed_at || !category) {
    console.log("No data");
    return;
  }

  const data: INewTransaction = {
    description: description.toString(),
    amount: Number(amount),
    completedAt: completed_at.toString(),

    categoryId: Number(category),
  };

  return await addTransaction({ ...data });
}
