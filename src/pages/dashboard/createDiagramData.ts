import { format } from "date-fns";
import TYPES_TRANSACTION from "../../config/typeTransactions";
import { ITransaction } from "../../interface/ITransactions";

export type DiagramData = {
  completedAt: string;
  Expense: number;
  Income: number;
};

interface IDiagramData {
  [key: string]: DiagramData;
}

export default function createDiagramData(transactions: ITransaction[] | undefined): DiagramData[] | [] {
  if (!transactions) {
    return [];
  }

  const dataDiagram = transactions.reduce((acc: IDiagramData, { completedAt, type, amount }) => {
    const dateKey = format(completedAt, "dd-MMM");

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
