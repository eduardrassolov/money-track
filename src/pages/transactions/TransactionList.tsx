import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { FC } from "react";
import TransactionCard from "../../components/transactionCard/TransactionCard.tsx";
import { SortBy } from "../../types/sortBy.type.ts";
import { ITransaction } from "../../interface/ITransactions.ts";
import useFilter from "../../utils/hooks/useFilter.tsx";
import useSort from "../../utils/hooks/useSort.tsx";
import { useUser } from "../../utils/hooks/useUser.tsx";
import { Filter } from "../../types/filterBy.type.ts";
import apiDeleteTransaction from "../../services/api/deleteTransaction.ts";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import { useBoundStore } from "../../store/store.tsx";

import { searchTransactionsByMask } from "../../utils/helpers/searchTransactionsByMask.ts";
import LoadingUi from "../../components/spinner/LoadingUi.tsx";
import Pagination from "../../components/pagination/Pagination.tsx";
import usePagination from "../../utils/hooks/usePagination.tsx";
import { DEFAULT_ITEMS_PER_PAGE } from "../../config/paginationItems.ts";
import { ROUTES } from "../../config/routes.ts";

const List = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 0 4rem;
`

const LoaderContainer = styled.div`
    display: flex;
    margin: 1rem auto;
`

interface ITransactionList {
    listType: string,
    loader: (userId: string, filter: Filter, sortBy: SortBy, from: string, to: string) => Promise<ITransaction[]>;
}

const TransactionList: FC<ITransactionList> = ({ listType, loader }) => {
    const navigate = useNavigate();
    const queryClient = useQueryClient();
    const { mutate: deleteTransaction } = useMutation({ mutationFn: apiDeleteTransaction, onSuccess: succesHandle });
    const mask = useBoundStore((state) => state.search);
    const { filter } = useFilter();
    const sortBy: SortBy = useSort();
    const { user } = useUser();

    const { currPage } = usePagination();

    if (!user) {
        return null;
    }

    const { id: userId } = user;
    const { from, to } = useBoundStore((state) => state.filterRange);
    const { data: filteredSortedTransactions, isLoading } = useQuery(
        {
            queryKey: [userId, listType, from, to, sortBy],
            queryFn: () => loader(userId, filter, sortBy, from, to)
        });

    const handleEdit = (id: number) => navigate(`${ROUTES.ROOT}/${listType}/${id}`);

    const handleDelete = (id: number) => deleteTransaction(id);

    function succesHandle() {
        toast.success('Successfully deleted.');
        queryClient.invalidateQueries({ queryKey: [userId, listType, from, to, sortBy] });
    }

    const transactions = searchTransactionsByMask(filteredSortedTransactions, mask);
    const numberTransactionsPerPage = Number(localStorage.getItem("transactionPerPage")) || DEFAULT_ITEMS_PER_PAGE;
    const data = transactions?.slice((currPage - 1) * numberTransactionsPerPage, currPage * numberTransactionsPerPage);

    return (
        <List>
            {
                isLoading ?
                    <LoaderContainer>
                        <LoadingUi />
                    </LoaderContainer>
                    :
                    data?.map((transaction: ITransaction, index: number) =>
                        <TransactionCard
                            key={transaction.id}
                            item={transaction}
                            onDelete={() => { handleDelete(transaction.id) }}
                            onEdit={handleEdit}
                            index={index}
                        />)
            }

            <Pagination maxLength={transactions?.length} />
        </List>
    )
}
export default TransactionList;