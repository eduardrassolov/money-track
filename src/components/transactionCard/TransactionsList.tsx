import TransactionCard from "./TransactionCard";
import { ITransaction } from "../../interface/ITransactions";
import useDelete from "./useDelete";

interface ITransactionList {
    data: Array<ITransaction>,
    listType: string
}

const TransactionsList = ({ data, listType }: ITransactionList) => {
    if (!Array.isArray(data)) {
        return (<div>loading...</div>);
    }

    const { deleteTransaction } = useDelete(listType);

    return (
        <>
            {data.map((transaction) =>
                <TransactionCard
                    key={transaction.id}
                    item={transaction}
                    onDelete={() => deleteTransaction(transaction.id)}
                />)}
        </>
    )
}
export default TransactionsList;