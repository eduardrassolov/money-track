import { ITransaction } from "../../interface/ITransactions";

export interface ISummary {
  name: string;
  value: number;
  percentage: number;
}

interface IFilteredCategory {
  [key: string]: number;
}

export function getSummaryData(transactions: Array<ITransaction>): ISummary[] | [] {
  if (!transactions) {
    return [];
  }

  const summaryData = filterDataByCategory(transactions);
  const totalAmount = transactions.reduce((acc: number, cur: ITransaction) => acc + cur.amount, 0);
  return calculateSummary(summaryData, totalAmount);
}

function filterDataByCategory(transactions: Array<ITransaction>): IFilteredCategory {
  return transactions.reduce((acc: IFilteredCategory, cur: ITransaction) => {
    if (!acc[cur.category.name]) {
      acc[cur.category.name] = cur.amount;
    } else {
      acc[cur.category.name] += cur.amount;
    }
    return acc;
  }, {});
}

function calculateSummary(data: IFilteredCategory, totalAmount: number): ISummary[] {
  return Object.entries(data).map(([name, value]: [string, number]) => {
    return {
      name,
      value,
      percentage: Math.round((value * 100) / totalAmount),
    };
  });
}
