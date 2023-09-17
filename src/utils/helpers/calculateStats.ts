import { ITransaction } from "../../interface/ITransactions";

type CalcStatsFn = {
  expenses: Array<ITransaction> | undefined;
  incomes: Array<ITransaction> | undefined;
};

export default function calculateStats(fn: CalcStatsFn) {
  if(!fn.expenses || !fn.incomes) {
    return [0, 0, 0, NaN];
  }

  const totalExpenses: number = fn.expenses?.reduce((acc: number, item: ITransaction) => acc + item.amount, 0);
  const totalIncomes: number = fn.incomes?.reduce((acc: number, item: ITransaction) => acc + item.amount, 0);

  const balance: number = totalIncomes - totalExpenses;
  const coefficent: number = Math.round((totalExpenses / totalIncomes) * 100);

  return [totalExpenses, totalIncomes, balance, coefficent];
}
