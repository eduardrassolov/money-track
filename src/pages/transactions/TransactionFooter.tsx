import { FC } from "react"
import { styled } from "styled-components";
import { formatDate } from "../../helpers/dateFormat";
import FooterItem from "./FooterItem"
import { ITransaction } from "../../interface/ITransactions";

interface ITransactionProps {
    item: ITransaction;
}

const Container = styled.div`
    display: flex;
 
    span{
        margin-right: 1rem;
        font-size: 0.8rem;
    }
`

const TransactionFooter: FC<ITransactionProps> = ({ item }) => {
    const formatedDate: string = formatDate(item.completedAt.toString());

    return (
        <Container>
            <FooterItem title={`$ ${item.amount}`} />
            <FooterItem title={formatedDate} />
            <FooterItem title={item.typeTransaction?.name} />
        </Container>
    )
}
export default TransactionFooter;
