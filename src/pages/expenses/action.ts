import createTransaction from "../../services/createTransaction";
import TYPES_TRANSACTION from "../../config/typeTransactions";
import { redirect } from "react-router";
import { ROUTES } from "../../router";

export default async function actionExpenses(request: Request) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData.entries());
  await createTransaction({ ...data, type_id: TYPES_TRANSACTION.EXPENSE });

  return redirect(ROUTES.EXPENSES);
}
