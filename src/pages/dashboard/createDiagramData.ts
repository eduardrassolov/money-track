import TYPES_TRANSACTION from "../../config/typeTransactions";
import { ITransaction } from "../../interface/ITransactions";
import { formatDateToChart } from "../../utils/helpers/formatDate";

export type DiagramData = {
  completedAt: string;
  Expense: number;
  Income: number;
};

interface IDiagramData {
  [key: string]: DiagramData;
}

export default function createDiagramData(transactions: ITransaction[]): DiagramData[] {
  const dataDiagram = transactions.reduce((acc: IDiagramData, { completedAt, type, amount }) => {
    const dateKey = formatDateToChart(completedAt);

    if (!acc[dateKey]) {
      acc[dateKey] = { completedAt: dateKey, Expense: 0, Income: 0 };
    }
    
    if (type.id === TYPES_TRANSACTION.EXPENSE) {
      acc[dateKey].Expense += amount;

    } else if (type.id === TYPES_TRANSACTION.INCOME) {
      acc[dateKey].Income += amount;
    }

    return acc;
  }, {});

  return Object.values(dataDiagram);
}
