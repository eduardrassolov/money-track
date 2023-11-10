import { ITransaction } from "../../interface/ITransactions"
import TransactionCard from "../transactionCard/TransactionCard"
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../config/routes";

interface ITransactionList {
    transactions: Array<ITransaction>,
    onDeleteTransaction: (id: number) => void
}

const List = styled.div`
    display: flex;
    flex-direction: column;
`
export default function TransactionsList({ transactions, onDeleteTransaction }: ITransactionList) {
    const navigate = useNavigate();
    const handleEdit = (id: number) => navigate(`${ROUTES.TRANSACTION}/${id}`);

    return (
        <List>
            {transactions?.map((transaction: ITransaction, index: number) =>
                <TransactionCard
                    key={transaction.id}
                    item={transaction}
                    onDelete={() => onDeleteTransaction(transaction.id)}
                    onEdit={() => handleEdit(transaction.id)}
                    index={index}
                />)}
        </List>
    )
}
