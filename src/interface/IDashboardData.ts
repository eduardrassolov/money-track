import { ITransaction } from "./ITransactions";

export default interface IDashboardData {
  expenses: Array<ITransaction> | [];
  incomes: Array<ITransaction> | [];
}
