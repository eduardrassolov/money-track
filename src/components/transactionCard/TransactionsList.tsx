import { useLoaderData, useLocation, useNavigate } from "react-router-dom"
import TransactionCard from "./TransactionCard";
import deleteTransaction from "../../api/deleteTransaction";
import { toast } from "react-toastify";
import { ITransaction } from "../../interface/ITransactions";
import { QueryClient, useMutation, useQueryClient } from "@tanstack/react-query";


interface ITransactionList {
    data: Array<ITransaction>,
    listType: string
}

const TransactionsList = ({ data, listType }: ITransactionList) => {
    // const data = useLoaderData() as Array<ITransaction> | undefined;
    // const navigate = useNavigate();

    const queryClient = useQueryClient();

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
        // const error = await deleteTransaction(id);
        // error ? toast.error(error.message) : toast.success('Successfully deleted.');
        // navigate(location.pathname);
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