import { useQuery } from '@tanstack/react-query';
import { loaderExpenses } from '../../expenses/loader';
import { loaderIncomes } from '../../income/loader';
import TYPES_TRANSACTION from '../../../config/typeTransactions';
import { useBoundStore } from '../../../store/store';
import { sortBy } from '../PieView';
import styled from 'styled-components';
import StatItem from './StatItem';


const StyledDiv = styled.div`
    width: 100%;
    display: flex;
    gap: 1rem;
`
export default function StatList({ transactions, user, currency }) {
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

    return (
        <StyledDiv>
            {!expenses ? "" : <StatItem transaction={expenses} currency={currency} color={"#c28794"} label={"Total expenses:"} />}
            {!incomes ? "" : <StatItem transaction={incomes} currency={currency} color={"#5cc49b"} label={"Total incomes:"} />}
        </StyledDiv>
    )
}
