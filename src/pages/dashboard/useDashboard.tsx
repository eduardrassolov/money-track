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

    const userId = user?.id;


    if (!userId) {
        throw new Error('User not found');
    };

    const { filter, from, to } = useFilter();
    console.log(from, to);

    const sortBy: SortBy = { field: 'completed_at', direction: 'asc' };

    const { data: transactions, isLoading: isTransactionLoading } = useQuery(
        {
            queryKey: [userId, QUERY_KEY.TRANSACTIONS, from, to, sortBy],
            queryFn: () => loaderTransactions(userId, filter, sortBy, from, to)
        });
    const { data: expenses, isLoading: isExpenseLoading } = useQuery(
        {
            queryKey: [userId, QUERY_KEY.EXPENSES, from, to, sortBy],
            // queryFn: () => loaderExpenses(userId, filter, sortBy)
            queryFn: () => loaderExpenses(userId, filter, sortBy, from, to),
            retryOnMount: true
        });
    const { data: incomes, isLoading: isIncomeLoading } = useQuery(
        {
            queryKey: [userId, QUERY_KEY.INCOMES, from, to, sortBy],
            queryFn: () => loaderIncomes(userId, filter, sortBy, from, to),
        });
    console.log("new", expenses);

    return { transactions, expenses, incomes, isTransactionLoading, isExpenseLoading, isIncomeLoading }
}
