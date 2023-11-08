import React from 'react'
import { Container, ListDiv } from '../../styles/TransactionContainer'
import CreateNewTransactionForm from '../newTransaction/CreateNewTransaction'
import Operation from '../operations/Operations'
import { useUser } from '../../utils/hooks/useUser'
import { useBoundStore } from '../../store/store'
import { useQuery } from '@tanstack/react-query'
import useSort from '../../utils/hooks/useSort'
import { SortBy } from '../../types/sortBy.type'
import { Filter } from '../../types/filterBy.type'
import { ITransaction } from '../../interface/ITransactions'
import useFilter from '../../utils/hooks/useFilter'
import TransactionsList from './TransactionsList'
import LoadingUi from '../spinner/LoadingUi'
import Pagination from '../pagination/Pagination'
import { searchTransactionsByMask } from '../../utils/helpers/searchTransactionsByMask'
import { DEFAULT_ITEMS_PER_PAGE } from '../../config/paginationItems'
import usePagination from '../../utils/hooks/usePagination'

interface ITransactionView {
    transactionType: number,
    queryKey: string,
    dataLoader: (userId: string, filter: Filter, sortBy: SortBy, from: string, to: string) => Promise<ITransaction[]>;

}

export default function TransactionView({ transactionType, queryKey, dataLoader }: ITransactionView) {
    const { user } = useUser();
    if (!user) {
        return null;
    }

    const { id: userId } = user;
    const { from, to } = useBoundStore((state) => state.filterRange);
    const mask = useBoundStore((state) => state.search);

    const sortBy: SortBy = useSort();
    const { filter } = useFilter();
    const { currPage } = usePagination();

    const { data: filteredTransactionData, isLoading } = useQuery(
        {
            queryKey: [userId, queryKey, from, to, sortBy],
            queryFn: () => dataLoader(userId, filter, sortBy, from, to)
        });

    const transactionsWithSearchMask = searchTransactionsByMask(filteredTransactionData, mask);
    const numberTransactionsPerPage = Number(localStorage.getItem("transactionPerPage")) || DEFAULT_ITEMS_PER_PAGE;
    const trasactions = transactionsWithSearchMask?.slice((currPage - 1) * numberTransactionsPerPage, currPage * numberTransactionsPerPage);

    return (
        <Container>
            {/* <CreateNewTransactionForm type={transactionType} />

            <Operation /> */}

            {isLoading || !trasactions ? <LoadingUi /> : <TransactionsList transactions={trasactions} />}

            <Pagination maxLength={transactionsWithSearchMask?.length} />
            {/* <TransactionList listType={QUERY_KEY.INCOMES} loader={dataLoader} /> */}
        </Container>
    )
}
