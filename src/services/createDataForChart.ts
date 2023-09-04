import { ITransaction } from "../interface/ITransactions";

interface IChartData {
  name: Date;
  uv: number;
  pv: number;
}

export function createDataForChart(data: Array<ITransaction>): IChartData[] {
  return data.map((transaction: ITransaction) => {
    return {
      name: transaction.completedAt,
      uv: transaction.amount,
      pv: transaction.amount,
    };
  });
}
