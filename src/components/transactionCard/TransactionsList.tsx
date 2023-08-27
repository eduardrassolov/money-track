import { useLoaderData, useLocation, useNavigate } from "react-router-dom"
import TransactionCard from "./TransactionCard";
import deleteTransaction from "../../api/deleteTransaction";
import { toast } from "react-toastify";
import { ITransaction } from "../../interface/ITransactions";

const TransactionsList = () => {
    const data = useLoaderData() as Array<ITransaction> | undefined;
    const location = useLocation();
    const navigate = useNavigate();

    if (!Array.isArray(data))
        return (<div>loading...</div>);

    const handleDelete = async (id: number) => {
        const error = await deleteTransaction(id);
        error ? toast.error(error.message) : toast.success('Successfully deleted.');

        navigate(location.pathname);
    }

    return (
        <>
            {data.map((transaction) =>
                <TransactionCard
                    key={transaction.id}
                    item={transaction}
                    onDelete={handleDelete}
                />)}
        </>
    )
}

export default TransactionsList;