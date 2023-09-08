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


const List = styled.div`
    display: flex;
    flex-direction: column;
    /* overflow: scroll; */
    padding: 0 0 4rem;
`
interface ITransactionList {
    listType: string,
    loader: (userId: string, filter: Filter, sortBy: SortBy) => Promise<ITransaction[]>;
}

const TransactionList: FC<ITransactionList> = ({ listType, loader }) => {
    const navigate = useNavigate();
    const { user } = useUser();
    const queryClient = useQueryClient();
    const { mutate: deleteTransaction } = useMutation({ mutationFn: apiDeleteTransaction, onSuccess: succesHandle });

    const { filter } = useFilter();
    const sortBy: SortBy = useSort();

    if (!user) {
        return;
    }

    const { id: userId } = user;

    const { data: transactions, error } = useQuery(
        {
            queryKey: [userId, listType, filter, sortBy],
            queryFn: () => loader(userId, filter, sortBy)
        });

    if (error instanceof Error || !transactions) {
        return;
    }

    const handleDelete = (id: number) => deleteTransaction(id);
    const handleEdit = (id: number) => {
        navigate(`/app/${listType}/${id}`);
        console.log('id clicked', id);
    }

    function succesHandle() {
        toast.success('Successfully deleted.');
        queryClient.invalidateQueries({ queryKey: [userId, listType, filter, sortBy] });
    }

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

            {/* <EditWindow isOpen={isOpen} onClose={handleEdit} id={id} /> */}
        </List>
    )
}
export default TransactionList;