import { useLoaderData } from "react-router-dom"
import Transaction from "./Transaction";

const TransactionsList = () => {
    const data = useLoaderData();

    if (!Array.isArray(data))
        return (<div>loading...</div>);

    const handleDelete = (id: number) =>
        console.log(id);


    console.log(data);
    return (
        <>
            <h1>Transactions</h1>

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