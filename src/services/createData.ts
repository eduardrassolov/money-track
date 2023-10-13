import { ITransaction } from "../interface/ITransactions";
import * as currencyData from "../_data/currency.json";
import { ICurrency } from "../utils/hooks/useCurrency";
import apiGetCurrencyRate from "./api/apiGetCurrencyRate";

interface IRate {
  [key: string]: number;
}

export default function convertToOneCurrency(transactions: ITransaction[], currency: ICurrency): ITransaction[] {
  return transactions.map((transaction) => {
    const amount = _convertFromTo(
      transaction.amount,
      transaction.currency?.shortName || "USD",
      currency?.shortName || "USD"
    );
    return { ...transaction, amount, currency };
  });
}

function _convertFromTo(amount: number, from: string, to: string) {
  const rates: IRate = currencyData.rates;
  // const rate = apiGetCurrencyRate(from, to);
  // console.log(rate);

  return Math.round((amount / rates[from]) * rates[to]);
}
