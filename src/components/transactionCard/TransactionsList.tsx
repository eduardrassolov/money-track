import { useLoaderData, useLocation, useNavigate } from "react-router-dom"
import Transaction from "./TransactionCard";
import Header from "../../ui/header/Header";
import deleteTransaction from "../../api/deleteTransaction";

const TransactionsList = () => {
    const data = useLoaderData()
    const location = useLocation();
    const navigate = useNavigate();

    if (!Array.isArray(data))
        return (<div>loading...</div>);

    const handleDelete = async (id: number) => {
        await deleteTransaction(id);
        navigate(location.pathname);

    }

    return (
        <>
            <Header>Transactions</Header>

            {data.map((transaction) =>
                <Transaction
                    key={transaction.id}
                    item={transaction}
                    onDelete={handleDelete}
                />)}
        </>
    )
}

export default TransactionsList;