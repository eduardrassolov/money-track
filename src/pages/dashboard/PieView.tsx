import { useQuery } from '@tanstack/react-query';

import { loaderExpenses } from '../expenses/loader';

import { SortBy } from '../../types/sortBy.type';
import { useBoundStore } from '../../store/store';

import PieItem from './PieItem';
import LoadingUi from '../../components/spinner/LoadingUi';

import styled from 'styled-components';
import TYPES_TRANSACTION from '../../config/typeTransactions';
import { loaderIncomes } from '../income/loader';
import { devices } from '../../config/breakPoints';
import { User } from '@supabase/supabase-js';
import { ICurrency } from '../../utils/hooks/useCurrency';

const sortBy: SortBy = { field: 'completed_at', direction: 'asc' };

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
                return loaderExpenses(user?.id, null, sortBy, from, to);
            }
        });
    const { data: incomes, isLoading: isIncomesLoading } = useQuery(
        {
            queryKey: [user?.id, TYPES_TRANSACTION.INCOME, from, to, sortBy],
            queryFn: () => {
                return loaderIncomes(user?.id, null, sortBy, from, to);
            }
        });

    console.log("data", expenses, incomes);
    return (
        <Div>
            {isExpenseLoading || isIncomesLoading || !expenses || !incomes ? <LoadingUi /> : <>
                <PieItem label={"Expenses by categories:"} transactions={expenses} currency={currency} />
                <PieItem label={"Incomes by categories:"} transactions={incomes} currency={currency} />
            </>}
        </Div>
    )
}
