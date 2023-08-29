import TransactionCard from "./TransactionCard";
import deleteTransaction from "../../api/deleteTransaction";
import { toast } from "react-toastify";
import { ITransaction } from "../../interface/ITransactions";
import { useMutation, useQueryClient } from "@tanstack/react-query";

interface ITransactionList {
    data: Array<ITransaction>,
    listType: string
}

const TransactionsList = ({ data, listType }: ITransactionList) => {
    const queryClient = useQueryClient();

    console.log(data);
    const mutation = useMutation({
        mutationFn: deleteTransaction,
        onSuccess: () => {
            toast.success('Successfully deleted.');
            queryClient.invalidateQueries({ queryKey: [listType] });
        }
    });

    if (!Array.isArray(data))
        return (<div>loading...</div>);

    const handleDelete = (id: number) => {
        mutation.mutate(id);
    }

    return (
        <>
            {data.map((transaction) =>
                <TransactionCard
                    key={transaction.id}
                    item={transaction}
                    onDelete={() => handleDelete(transaction.id)}
                />)}
        </>
    )
}

export default TransactionsList;