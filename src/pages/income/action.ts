import addTransaction from "../../api/addTransaction";
import INewTransaction from "../../interface/INewTransaction";

export default async function actionIncomes(request: Request) {
  const formData = await request.formData();

  const description = formData.get("description");
  const amount = formData.get("amount");
  const completed_at = formData.get("completed_at");
  const category = formData.get("category");

  console.log("cc", category);

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
