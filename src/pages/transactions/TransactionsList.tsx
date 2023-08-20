import { useLoaderData } from "react-router-dom"
import Transaction from "./TransactionCard";
import Header from "../../components/header/Header";

const TransactionsList = () => {
    const data = useLoaderData();

    if (!Array.isArray(data))
        return (<div>loading...</div>);

    const handleDelete = (id: number) =>
        console.log(id);

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