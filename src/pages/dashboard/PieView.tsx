import { useQuery } from '@tanstack/react-query';
import React from 'react'
import { loaderExpenses } from '../expenses/loader';
import { QUERY_KEY } from '../../config/queryClientKeys';
import { SortBy } from '../../types/sortBy.type';
import { useBoundStore } from '../../store/store';
import convertToOneCurrency from '../../services/createData';
import PieItem from './PieItem';
import LoadingUi from '../../components/spinner/LoadingUi';
import { MyResponsivePieCanvas } from './DonutTest';
import styled from 'styled-components';
import TYPES_TRANSACTION from '../../config/typeTransactions';
import { loaderIncomes } from '../income/loader';

const sortBy: SortBy = { field: 'completed_at', direction: 'asc' };

const Div = styled.div`
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
    width: 100%;
`
export default function PieView({ user, currency }) {

    const [from, to] = useBoundStore(state => state.range);

    const { data: expenses, isExpenseLoading } = useQuery(
        {
            queryKey: [user?.id, TYPES_TRANSACTION.EXPENSE, from, to, sortBy],
            queryFn: () => {
                return loaderExpenses(user?.id, null, sortBy, from, to);
            }
        });
    const { data: incomes, isIncomesLoading } = useQuery(
        {
            queryKey: [user?.id, TYPES_TRANSACTION.INCOME, from, to, sortBy],
            queryFn: () => {
                return loaderIncomes(user?.id, null, sortBy, from, to);
            }
        });

    console.log("data", expenses, incomes);
    return (
        <Div>
            {isExpenseLoading || isIncomesLoading ? <LoadingUi /> : <>
                <PieItem label={"Expenses by categories"} transactions={expenses} currency={currency} />

                <PieItem label={"Incomes by categories"} transactions={incomes} currency={currency} />
            </>}
        </Div>
    )
}
