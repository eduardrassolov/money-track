import TYPES_TRANSACTION from "../../config/typeTransactions";
import addTransaction from "../../api/addTransaction";

export default async function actionExpenses(request: Request) {
  const formData = await request.formData();
  const formDt = Object.fromEntries(formData.entries());

  return await addTransaction({ ...formDt, type_id: TYPES_TRANSACTION.EXPENSE });
}
