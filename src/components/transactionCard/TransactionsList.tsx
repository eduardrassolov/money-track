import { useLoaderData, useLocation, useNavigate } from "react-router-dom"
import Transaction from "./TransactionCard";
import deleteTransaction from "../../api/deleteTransaction";
import { toast } from "react-toastify";
import sortByDate from "../../services/sortTransactions";

const TransactionsList = () => {
    const data = useLoaderData()
    const location = useLocation();
    const navigate = useNavigate();

    if (!Array.isArray(data))
        return (<div>loading...</div>);

    const handleDelete = async (id: number) => {
        const error = await deleteTransaction(id);
        error ? toast.error(error.message) : toast.success('Successfully deleted.');

        navigate(location.pathname);
    }

    const sortedData = sortByDate([...data]);

    return (
        <>
            {sortedData.map((transaction) =>
                <Transaction
                    key={transaction.id}
                    item={transaction}
                    onDelete={handleDelete}
                />)}
        </>
    )
}

export default TransactionsList;