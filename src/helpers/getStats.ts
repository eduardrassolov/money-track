import { ITransaction } from "../interface/ITransactions";

interface ISummary {
  name: string;
  value: number;
  percentage: number;
}

export function getSummaryData(transactions: Array<ITransaction>) {
  const summaryData = filterDataByCategory(transactions);
  const totalAmount = transactions.reduce((acc: number, cur: ITransaction) => acc + cur.amount, 0);

  return calculateSummary(summaryData, totalAmount);
}

function filterDataByCategory(transactions) {
  return transactions.reduce((acc, cur) => {
    if (!acc[cur.category.name]) {
      acc[cur.category.name] = cur.amount;
    } else {
      acc[cur.category.name] += cur.amount;
    }
    return acc;
  }, {});
}

function calculateSummary(data, totalAmount: number) {
  return Object.entries(data).map(([name, value]) => {
    return {
      name: name,
      value: value,
      percentage: Math.round((value * 100) / totalAmount),
    };
  });
}
