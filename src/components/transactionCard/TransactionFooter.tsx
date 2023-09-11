import { FC } from "react"
import { styled } from "styled-components";
import FooterItem from "./FooterItem"
import { ITransaction } from "../../interface/ITransactions";
import { formatDate } from "../../utils/helpers/formatDate";
import { HiOutlineBanknotes, HiOutlineCalendarDays, HiOutlineTag } from "react-icons/hi2";
interface ITransactionProps {
    item: ITransaction;
}

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;    
    gap: 0.5rem;
`

const TransactionFooter: FC<ITransactionProps> = ({ item }) => {
    const formatedDate: string = formatDate(item.completedAt.toString());
    return (
        <Container>
            {/* <FooterItem title={item.type.name} /> */}
            <FooterItem title={`${item.currency.symbol} ${item.amount}`} icon={<HiOutlineBanknotes />} />
            <FooterItem title={formatedDate} icon={<HiOutlineCalendarDays />} />
            <FooterItem title={item.category.name || ''} icon={<HiOutlineTag />} />
            {/* <FooterItem title={user?.id || ''} /> */}
        </Container >
    )
}
export default TransactionFooter;
