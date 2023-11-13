import { ITransaction } from "../../interface/ITransactions";

export default function calculateStats(expenses: Array<ITransaction>, incomes: Array<ITransaction>) {
    const totalExpenses: number = expenses?.reduce((acc: number, item: ITransaction) => acc + item.amount, 0);

    const totalIncomes: number = incomes?.reduce((acc: number, item: ITransaction) => acc + item.amount, 0);

    const currentBalance: number = totalIncomes - totalExpenses;

    const coefficent: number = Math.round((totalExpenses / totalIncomes) * 100);

    return [totalExpenses, totalIncomes, currentBalance, coefficent];
}
