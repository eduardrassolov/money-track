import { ITransaction } from "../../interface/ITransactions"
import TransactionCard from "../transactionCard/TransactionCard"
import { useMutation } from "@tanstack/react-query";
import apiDeleteTransaction from "../../services/api/deleteTransaction";

interface ITransactionList {
    transactions: Array<ITransaction>
}
export default function TransactionsList({ transactions }: ITransactionList) {
    const handleEdit = (id: number) => { };

    const { mutate: deleteTransaction } = useMutation({ mutationFn: apiDeleteTransaction });
    const handleDelete = (id: number) => deleteTransaction(id);

    return (
        transactions?.map((transaction: ITransaction, index: number) =>
            <TransactionCard
                key={transaction.id}
                item={transaction}
                onDelete={() => { handleDelete(transaction.id) }}
                onEdit={handleEdit}
                index={index}
            />)
    )
}
