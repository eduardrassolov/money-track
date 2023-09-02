import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { FC } from "react";
import TransactionCard from "../../components/transactionCard/TransactionCard.tsx";
import deleteTransaction from "../../services/api/deleteTransaction.ts";
import { SortBy } from "../../types/sortBy.type.ts";
import { ILoaderTransaction } from "./loader.ts";
import { ITransaction } from "../../interface/ITransactions.ts";
import useFilter from "../../utils/hooks/useFilter.tsx";
import useSort from "../../utils/hooks/useSort.tsx";

interface ITransactionList {
    listType: string,
    loader: ({ filter, sortBy }: ILoaderTransaction) => Promise<ITransaction[]>;
}

const TransactionList: FC<ITransactionList> = ({ listType, loader }) => {
    const { filter } = useFilter();
    const sortBy: SortBy = useSort();
    const { data: transactions, error } = useQuery(
        {
            queryKey: [listType, filter, sortBy],
            queryFn: () => loader({ filter, sortBy })
        });

    const queryClient = useQueryClient();
    const mutation = useMutation({ mutationFn: deleteTransaction, onSuccess: succesHandle });

    if (error instanceof Error || !transactions)
        return;

    const handleDelete = (id: number) => mutation.mutate(id);
    function succesHandle() {
        toast.success('Successfully deleted.');
        queryClient.invalidateQueries({ queryKey: [listType] });
    }

    return (
        <>
            {transactions.map((transaction: ITransaction) =>
                <TransactionCard
                    key={transaction.id}
                    item={transaction}
                    onDelete={() => { handleDelete(transaction.id) }}
                />)
            }
        </>
    )
}
export default TransactionList;