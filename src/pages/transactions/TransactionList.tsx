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
import { useCurrStore } from "../../store/store.tsx";
import { ROUTES } from "../../router.tsx";
import { searchTransactionsByMask } from "../../utils/helpers/searchTransactionsByMask.ts";

const List = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 0 4rem;
    margin: 1rem 0;
`
interface ITransactionList {
    listType: string,
    loader: (userId: string, filter: Filter, sortBy: SortBy) => Promise<ITransaction[]>;
}

const TransactionList: FC<ITransactionList> = ({ listType, loader }) => {
    const navigate = useNavigate();
    const queryClient = useQueryClient();
    const { mutate: deleteTransaction } = useMutation({ mutationFn: apiDeleteTransaction, onSuccess: succesHandle });
    const mask = useCurrStore((state) => state.search);
    const { filter } = useFilter();
    const sortBy: SortBy = useSort();
    const { user } = useUser();

    if (!user) {
        return;
    }

    const { id: userId } = user;
    const { data: filteredSortedTransactions, error } = useQuery(
        {
            queryKey: [userId, listType, filter, sortBy],
            queryFn: () => loader(userId, filter, sortBy)
        });

    const handleEdit = (id: number) => navigate(`${ROUTES.ROOT}/${listType}/${id}`);

    const handleDelete = (id: number) => deleteTransaction(id);
    function succesHandle() {
        toast.success('Successfully deleted.');
        queryClient.invalidateQueries({ queryKey: [userId, listType, filter, sortBy] });
    }

    if (error instanceof Error || !filteredSortedTransactions) {
        return null;
    }
    const transactions = searchTransactionsByMask(filteredSortedTransactions, mask);

    return (
        <List>
            {
                transactions.map((transaction: ITransaction) =>
                    <TransactionCard
                        key={transaction.id}
                        item={transaction}
                        onDelete={() => { handleDelete(transaction.id) }}
                        onEdit={handleEdit}
                    />)
            }
        </List>
    )
}
export default TransactionList;