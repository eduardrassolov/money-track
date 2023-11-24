import { useQuery } from '@tanstack/react-query';
import dayjs from 'dayjs';
import isBetween from "dayjs/plugin/isBetween";
import styled from 'styled-components';
import { HiOutlineCreditCard, HiOutlineShoppingBag } from 'react-icons/hi2';
import { User } from '@supabase/supabase-js';

import TYPES_TRANSACTION from '../../../config/typeTransactions';
import { useBoundStore } from '../../../store/store';
import { sortBy } from '../pie/PieView';
import StatItem from './StatItem';
import { ICurrency } from '../../../utils/hooks/useCurrency';
import { loadTransactions } from '../../../components/transactionView/loadTransactions';
import { QUERY_KEY } from '../../../config/queryClientKeys';

dayjs.extend(isBetween);

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
            queryKey: [user?.id, TYPES_TRANSACTION.EXPENSE, sortBy],
            queryFn: () => {
                return loadTransactions(user?.id, QUERY_KEY.EXPENSES, sortBy);
            }
        });
    const { data: incomes } = useQuery(
        {
            queryKey: [user?.id, TYPES_TRANSACTION.INCOME, sortBy],
            queryFn: () => {
                return loadTransactions(user?.id, QUERY_KEY.INCOMES, sortBy);
            }
        });

    const expensesByRange = expenses?.filter((transaction) => {
        const date = dayjs(transaction.completedAt).format("YYYY-MM-DD");
        if (dayjs(date).isBetween(from, to, "day", "[]")) {
            return transaction;
        }
    });
    const incomesByRange = incomes?.filter((transaction) => {
        const date = dayjs(transaction.completedAt).format("YYYY-MM-DD");
        if (dayjs(date).isBetween(from, to, "day", "[]")) {
            return transaction;
        }
    });


    return (
        <StyledDiv>
            <StatItem transaction={expensesByRange} currency={currency} color={"#c28794"} label={"Expenses:"} icon={<HiOutlineShoppingBag size={"2.2rem"} />} />
            <StatItem transaction={incomesByRange} currency={currency} color={"#5cc49b"} label={"Incomes:"} icon={<HiOutlineCreditCard size={"2.2rem"} />} />
        </StyledDiv>
    )
}
