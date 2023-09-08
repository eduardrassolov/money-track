import TransactionCard from "./TransactionCard";
import { ITransaction } from "../../interface/ITransactions";
import useDelete from "./useDelete";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";

interface ITransactionList {
    data: Array<ITransaction>,
    listType: string
}

const Div = styled.div`
    /* display: flex; */
    overflow: scroll;
`

const TransactionsList = ({ data, listType }: ITransactionList) => {
    const navigate = useNavigate();

    if (!Array.isArray(data)) {
        return (<div>loading...</div>);
    }

    const { deleteTransaction } = useDelete();

    const handleDelete = (id: number) => deleteTransaction(id);

    const handleEdit = (id: number) => navigate(`/app/${listType}/${id}`)

    return (
        <Div>
            {data.map((transaction) =>
                <TransactionCard
                    key={transaction.id}
                    item={transaction}
                    onDelete={() => handleDelete(transaction.id)}
                    onEdit={() => handleEdit(transaction.id)}
                />)}
        </Div>
    )
}
export default TransactionsList;