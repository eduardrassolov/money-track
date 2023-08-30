import { ITransaction } from "../interface/ITransactions";
import formatNumberWithSpaces from "./formatWithSpace";

type CalcStatsFn = {
  expenses: Array<ITransaction>;
  incomes: Array<ITransaction>;
};

export default function calcStats(fn: CalcStatsFn): string[] {
  const totalExpenses: number = fn.expenses.reduce((acc: number, item: ITransaction) => acc + item.amount, 0);
  const totalIncomes: number = fn.incomes.reduce((acc: number, item: ITransaction) => acc + item.amount, 0);

  const balance: number = totalIncomes - totalExpenses;
  const coefficent: number = Math.round((totalExpenses / totalIncomes) * 100);

  return [
    `$ ${formatNumberWithSpaces(totalExpenses)}`,
    `$ ${formatNumberWithSpaces(totalIncomes)}`,
    `$ ${formatNumberWithSpaces(balance)}`,
    `${coefficent} %`,
  ];
}
