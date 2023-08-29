import { useSearchParams } from "react-router-dom"

import TransactionCard from "../../components/transactionCard/TransactionCard";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import Filter from "../../components/filter/Filter";
import { styled } from "styled-components";

import Sort from "../../components/sort/Sort";
import deleteTransaction from "../../api/deleteTransaction";
import { toast } from "react-toastify";
import { FILTER_DATE_OPTIONS, FILTER_KEYS } from "../../components/filter/filterParameters";
import { ITransaction } from "../../interface/ITransactions";
import { Iloader } from "../expenses/loader";

const Div = styled.div`
    display: flex;
    gap:1rem;
    margin: 0 0 1rem;
`
export type SortBy = {
    field: string,
    direction: string
}
interface ITransactionList {
    listType: string,
    loader: ({ filter, sortBy }: Iloader) => Promise<ITransaction[]>;
}

export default function TransactionArr({ listType, loader }: ITransactionList) {
    const [params] = useSearchParams();
    const queryClient = useQueryClient();
    const mutation = useMutation({
        mutationFn: deleteTransaction,
        onSuccess: () => {
            toast.success('Successfully deleted.');
            queryClient.invalidateQueries({ queryKey: [listType] });
        }
    });

    const filterValue = params.get(FILTER_KEYS.DATE);
    const filter = !filterValue ? null : filterValue;

    const sortValue = params.get('sort') || 'completed_at-desc';
    const [field, direction] = sortValue.split('-');
    const sortBy: SortBy = { field, direction };

    const { data: transactions, error } = useQuery({ queryKey: [listType, filter, sortBy], queryFn: () => loader({ filter, sortBy }) });

    if (error instanceof Error || !transactions)
        return;

    const handleDelete = (id: number) => {
        mutation.mutate(id);
    }
    return (
        <>
            <Div>
                <Filter options={FILTER_DATE_OPTIONS} filterKey={FILTER_KEYS.DATE} />
                <Sort />
            </Div>

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
