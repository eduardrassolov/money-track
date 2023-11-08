import { ITransaction } from "../../interface/ITransactions"
import TransactionCard from "../transactionCard/TransactionCard"
import { useMutation } from "@tanstack/react-query";
import apiDeleteTransaction from "../../services/api/deleteTransaction";
import styled from "styled-components";

interface ITransactionList {
    transactions: Array<ITransaction>
}

const List = styled.div`
    display: flex;
    flex-direction: column;
`
export default function TransactionsList({ transactions }: ITransactionList) {
    const handleEdit = (id: number) => { };

    const { mutate: deleteTransaction } = useMutation({ mutationFn: apiDeleteTransaction });
    const handleDelete = (id: number) => deleteTransaction(id);

    return (
        <List>
            {transactions?.map((transaction: ITransaction, index: number) =>
                <TransactionCard
                    key={transaction.id}
                    item={transaction}
                    onDelete={() => { handleDelete(transaction.id) }}
                    onEdit={handleEdit}
                    index={index}
                />)}
        </List>
    )
}
