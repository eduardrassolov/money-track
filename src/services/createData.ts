import { ITransaction } from "../interface/ITransactions";
import * as currencyData from "../_data/currency.json";

interface IRate {
    [key: string]: number;
}

//TODO fix any
export default function convertToOneCurrency(transactions: ITransaction[] | undefined, currency: any): ITransaction[] {
    if (!transactions || !currency) {
        return [];
    }

    return transactions.map((transaction) => {
        const amount = _convertFromTo(transaction.amount, transaction.currency?.shortName || "USD", currency?.shortName || "USD");
        return { ...transaction, amount, currency };
    });
}

function _convertFromTo(amount: number, from: string, to: string) {
    const rates: IRate = currencyData.rates;
    console.log(from, to);

    return Math.round((amount / rates[from]) * rates[to]);
}
