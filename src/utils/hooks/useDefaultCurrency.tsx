import { useUser } from './useUser';
import { useQuery } from '@tanstack/react-query';
import apiGetCurrency from '../../services/api/apiGetCurrency';

export default function useDefaultCurrency() {
    const { user } = useUser();

    const { data: currencies } = useQuery({ queryKey: ["currency"], queryFn: () => apiGetCurrency() });
    const currency = currencies?.find((currency) => currency.id === user?.user_metadata.currency)?.symbol;

    return { defaultCurrency: currency }
}
