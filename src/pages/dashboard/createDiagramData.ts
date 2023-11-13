import TYPES_TRANSACTION from "../../config/typeTransactions";
import { ITransaction } from "../../interface/ITransactions";
import dayjs from "dayjs";

export type DiagramData = {
    completedAt: string;
    Expense: number;
    Income: number;
};

interface IDiagramData {
    [key: string]: DiagramData;
}

export default function createDiagramData(transactions: ITransaction[] | undefined, formatDate: string): DiagramData[] | [] {
    if (!transactions) {
        return [];
    }

    const dataDiagram = transactions.reduce((acc: IDiagramData, { completedAt, type, amount }) => {
        const dateKey = dayjs(completedAt).format(formatDate);

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
