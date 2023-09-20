import { ITransaction } from "../interface/ITransactions";
import * as currencyData from "../_data/currency.json"

export default function convertToOneCurrency(transactions: ITransaction[] | undefined, currency){
    if(!transactions || !currency) {
        return [];
    }

    return transactions?.map(transaction => {
        const amount = convert(transaction.amount, transaction.currency.shortName, currency.shortName);
        
        return {...transaction, amount, currency}
    
    })
}

function convert(amount: number, from: string, to: string) { 
    const rates = currencyData.rates;
    return amount / rates[from] * rates[to];
}