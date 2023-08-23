import getTransactions from "../../api/getTransactions";
import TYPES_TRANSACTION from "../../config/typeTransactions";
import IDashboardData from "../../interface/IDashboardData";
import { ITransaction } from "../../interface/ITransactions";

export async function loaderDashboard(): Promise<IDashboardData> {
  const data: Array<ITransaction> = await getTransactions(true);

  // TODO: Refactor code below
  const expenses: Array<ITransaction> = data.filter((item) => item.typeTransaction?.id === TYPES_TRANSACTION.EXPENSE);
  const incomes: Array<ITransaction> = data.filter((item) => item.typeTransaction?.id === TYPES_TRANSACTION.INCOME);

  return { expenses, incomes };
}
