import { ITransaction } from "../../interface/ITransactions";

export default function createDataDiagram(transactions: ITransaction[], type: string) {
  transactions.map((transaction) => console.log(getDateFormatted(transaction.completedAt)));

  const result = transactions?.reduce((acc, curr: ITransaction) => {
    const key = curr.completedAt.toLocaleDateString();
    if (acc[key]) {
      acc[key] += curr.amount;
    } else {
      acc[key] = curr.amount;
    }
    return acc;
  }, {});
  console.log(result);
  const res = Object.entries(result).map(([key, value]) => {
    return {
      name: key,
      [type]: value,
    };
  });
  console.log(res);
  return result;
}

const getDateFormatted = (date: Date) => date.toLocaleDateString();
