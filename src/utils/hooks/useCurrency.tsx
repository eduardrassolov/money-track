import { useQuery } from "@tanstack/react-query";
import { QUERY_KEY } from "../../config/queryClientKeys";
import apiGetCurrency from "../../services/api/apiGetCurrency";

export interface ICurrency {
    id: string;
    name: string;
    symbol: string | null;
    shortName: string | null;
    code?: number | null | undefined;
}

export default function useCurrency(defaultCurrencyId: string) {
    const {data: currencies} = useQuery({ queryKey: [QUERY_KEY.CURRENCY], queryFn: apiGetCurrency})

    const defaultCurrency = currencies?.find(currency => currency.id === defaultCurrencyId);

    return {currencies, defaultCurrency}

}
