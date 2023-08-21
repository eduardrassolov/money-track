import { FC } from "react"
import { styled } from "styled-components";
import { formatDate } from "../../helpers/dateFormat";
import FooterItem from "./FooterItem"
import { ITransaction } from "../../interface/ITransactions";
import { TbMoneybag, TbCalendar, TbInfoSquareRounded } from "react-icons/tb";


interface ITransactionProps {
    item: ITransaction;
}

const Container = styled.div`
    display: flex;
    
`

const TransactionFooter: FC<ITransactionProps> = ({ item }) => {
    const formatedDate: string = formatDate(item.completedAt.toString());

    return (
        <Container>
            <FooterItem title={`$ ${item.amount}`} icon={<TbMoneybag />} />
            <FooterItem title={formatedDate} icon={<TbCalendar />} />
            <FooterItem title={item.typeTransaction?.name} icon={<TbInfoSquareRounded />} />
        </Container>
    )
}
export default TransactionFooter;
