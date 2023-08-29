import { useSearchParams } from "react-router-dom"

import TransactionCard from "../../components/transactionCard/TransactionCard";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import Filter from "../../components/filter/Filter";
import { styled } from "styled-components";

import Sort from "../../components/sort/Sort";
import deleteTransaction from "../../api/deleteTransaction";
import { toast } from "react-toastify";

const Div = styled.div`
    display: flex;
    gap:1rem;
    margin: 0 0 1rem;
`

export default function TransactionArr({ listType, loader }) {
    const queryClient = useQueryClient();
    const mutation = useMutation({
        mutationFn: deleteTransaction,
        onSuccess: () => {
            toast.success('Successfully deleted.');
            queryClient.invalidateQueries({ queryKey: [listType] });
        }
    });
    const handleDelete = (id: number) => {
        mutation.mutate(id);
    }

    const [params] = useSearchParams();
    const filterValue = params.get('date');
    const filter = !filterValue ? null : filterValue;

    const sortValue = params.get('sort') || 'completed_at-desc';
    const [field, direction] = sortValue.split('-');
    const sortBy = { field, direction };


    const { data, error } = useQuery({ queryKey: [listType, filter, sortBy], queryFn: () => loader({ filter, sortBy }) });

    if (error instanceof Error || !data)
        return;



    return (
        <>
            <Div>
                <Filter />
                <Sort />
            </Div>
            {
                data.map((transaction) =>
                    <TransactionCard
                        key={transaction.id}
                        item={transaction}
                        onDelete={() => { handleDelete(transaction.id) }}
                    />)
            }
        </>

    )
}
