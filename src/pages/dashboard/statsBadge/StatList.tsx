import { useQuery } from '@tanstack/react-query';
import { loaderExpenses } from '../../expenses/loader';
import { loaderIncomes } from '../../income/loader';
import TYPES_TRANSACTION from '../../../config/typeTransactions';
import { useBoundStore } from '../../../store/store';
import { sortBy } from '../PieView';
import styled from 'styled-components';
import StatItem from './StatItem';
import { HiOutlineCreditCard, HiOutlineShoppingBag } from 'react-icons/hi2';
import { User } from '@supabase/supabase-js';
import { ICurrency } from '../../../utils/hooks/useCurrency';


const StyledDiv = styled.div`
    width: 100%;
    display: flex;
    gap: 1rem;
`

interface IStatList {
    user: User,
    currency: ICurrency
}

export default function StatList({ user, currency }: IStatList) {
    const [from, to] = useBoundStore(state => state.range);

    const { data: expenses } = useQuery(
        {
            queryKey: [user?.id, TYPES_TRANSACTION.EXPENSE, from, to, sortBy],
            queryFn: () => {
                return loaderExpenses(user?.id, null, sortBy, from, to);
            }
        });
    const { data: incomes } = useQuery(
        {
            queryKey: [user?.id, TYPES_TRANSACTION.INCOME, from, to, sortBy],
            queryFn: () => {
                return loaderIncomes(user?.id, null, sortBy, from, to);
            }
        });

    return (
        <StyledDiv>
            {!expenses ? "" : <StatItem transaction={expenses} currency={currency} color={"#c28794"} label={"Expenses:"} icon={<HiOutlineShoppingBag size={"2.2rem"} />} />}
            {!incomes ? "" : <StatItem transaction={incomes} currency={currency} color={"#5cc49b"} label={"Incomes:"} icon={<HiOutlineCreditCard size={"2.2rem"} />} />}
        </StyledDiv>
    )
}
