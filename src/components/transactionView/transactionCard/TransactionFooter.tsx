import { FC } from "react"
import { styled } from "styled-components";
import FooterItem from "./FooterItem"
import { ITransaction } from "../../../interface/ITransactions";
import { HiOutlineBanknotes, HiOutlineCalendarDays, HiOutlineTag } from "react-icons/hi2";
import { format } from "date-fns";
import formatNumberWithSpaces from "../../../utils/helpers/formatWithSpace";
interface ITransactionProps {
    item: ITransaction;
}

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;    
    gap: 0.5rem;
`

const TransactionFooter: FC<ITransactionProps> = ({ item }) => {
    const formatedDate: string = format(item.completedAt, "dd-MMM-yyyy HH:mm");
    const formatedCurrency = formatNumberWithSpaces(item.amount, item.currency.shortName || "USD")
    return (
        <Container>
            {/* <FooterItem title={`${item.currency.symbol} ${item.amount}`} icon={<HiOutlineBanknotes />} /> */}
            <FooterItem title={`${formatedCurrency}`} icon={<HiOutlineBanknotes />} />
            <FooterItem title={item.category.name || ''} icon={<HiOutlineTag />} />
            <FooterItem title={formatedDate} icon={<HiOutlineCalendarDays />} />
        </Container >
    )
}
export default TransactionFooter;
