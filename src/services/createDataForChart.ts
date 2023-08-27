import { ITransaction } from "../interface/ITransactions";

interface IChartData {
  name: string;
  Income: number;
  Expense: number;
  amt: number;
}

export function createDataForChart(data: Array<ITransaction>): Array<IChartData> {
  return data.map((transaction: ITransaction) => {
    return {
      name: transaction.completedAt,
      uv: transaction.amount,
      pv: transaction.amount,
    };
  });
}
