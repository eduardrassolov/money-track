import { useQuery } from '@tanstack/react-query';
import styled from 'styled-components';
import { User } from '@supabase/supabase-js';
import dayjs from 'dayjs';
import isBetween from "dayjs/plugin/isBetween";

import { SortBy } from '../../../types/sortBy.type';
import { useBoundStore } from '../../../store/store';
import PieItem from './PieItem';
import LoadingUi from '../../../components/spinner/LoadingUi';
import TYPES_TRANSACTION from '../../../config/typeTransactions';
import { devices } from '../../../config/breakPoints';
import { ICurrency } from '../../../utils/hooks/useCurrency';
import { loadTransactions } from '../../../components/transactionView/loadTransactions';
import { QUERY_KEY } from '../../../config/queryClientKeys';

dayjs.extend(isBetween);

export const sortBy: SortBy = { field: 'completed_at', direction: 'asc' };

const Div = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    width: 100%;

    @media only screen and (min-width: ${devices.md}px){
        flex-direction: row;
    }
`

export default function PieView({ user, currency }: { user: User, currency: ICurrency }) {
    const [from, to] = useBoundStore(state => state.range);

    const { data: expenses, isLoading: isExpenseLoading } = useQuery(
        {
            queryKey: [user?.id, TYPES_TRANSACTION.EXPENSE, from, to, sortBy],
            queryFn: () => {
                return loadTransactions(user?.id, QUERY_KEY.EXPENSES, sortBy);
            }
        });
    const { data: incomes, isLoading: isIncomesLoading } = useQuery(
        {
            queryKey: [user?.id, TYPES_TRANSACTION.INCOME, from, to, sortBy],
            queryFn: () => {
                return loadTransactions(user?.id, QUERY_KEY.INCOMES, sortBy);
            }
        });

    const filteredIncomes = incomes?.filter((transaction) => {
        const date = dayjs(transaction.completedAt).format("YYYY-MM-DD");
        if (dayjs(date).isBetween(from, to, "day", "[]")) {
            return transaction;
        }
    });
    const fileterExpenses = expenses?.filter((transaction) => {
        const date = dayjs(transaction.completedAt).format("YYYY-MM-DD");
        if (dayjs(date).isBetween(from, to, "day", "[]")) {
            return transaction;
        }
    });


    return (
        <Div>
            {isExpenseLoading || isIncomesLoading || !filteredIncomes || !fileterExpenses ? <LoadingUi /> : <>
                <PieItem label={"Expenses by categories:"} transactions={fileterExpenses} currency={currency} />
                <PieItem label={"Incomes by categories:"} transactions={filteredIncomes} currency={currency} />
            </>}
        </Div>
    )
}
