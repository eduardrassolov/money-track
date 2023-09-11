import { useUser } from '../../utils/hooks/useUser'
import useFilter from '../../utils/hooks/useFilter';
import { SortBy } from '../../types/sortBy.type';
import { useQuery } from '@tanstack/react-query';
import { QUERY_KEY } from '../../config/queryClientKeys';
import { loaderTransactions } from '../transactions/loader';
import { loaderExpenses } from '../expenses/loader';
import { loaderIncomes } from '../income/loader';

export default function useDashboard() {
    const { user } = useUser();
    const { filter } = useFilter();
    const sortBy: SortBy = { field: 'completed_at', direction: 'asc' };
    const userId = user?.id;

    const { data: transactions } = useQuery({ queryKey: [userId, QUERY_KEY.TRANSACTIONS, filter, sortBy], queryFn: () => loaderTransactions(userId, filter, sortBy) });
    const { data: expenses } = useQuery({ queryKey: [userId, QUERY_KEY.EXPENSES, filter, sortBy], queryFn: () => loaderExpenses(userId, filter, sortBy) });
    const { data: incomes } = useQuery({ queryKey: [userId, QUERY_KEY.INCOMES, filter, sortBy], queryFn: () => loaderIncomes(userId, filter, sortBy) });

    return { transactions, expenses, incomes }
}
