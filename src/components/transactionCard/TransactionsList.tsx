import TransactionCard from "./TransactionCard";
import deleteTransaction from "../../services/api/deleteTransaction";
import { toast } from "react-toastify";
import { ITransaction } from "../../interface/ITransactions";
import useDelete from "../../utils/hooks/useDelete";

interface ITransactionList {
    data: Array<ITransaction>,
    listType: string
}

const TransactionsList = ({ data, listType }: ITransactionList) => {
    if (!Array.isArray(data))
        return (<div>loading...</div>);

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