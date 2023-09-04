import { FC } from "react"
import { styled } from "styled-components";
import FooterItem from "./FooterItem"
import { ITransaction } from "../../interface/ITransactions";
import { TbMoneybag, TbCalendar, TbTag } from "react-icons/tb";
import { formatDate } from "../../utils/helpers/formatDate";
import { useUser } from "../../utils/hooks/useUser";
interface ITransactionProps {
    item: ITransaction;
}

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;    
    gap: 0.4rem;
`

const TransactionFooter: FC<ITransactionProps> = ({ item }) => {
    const formatedDate: string = formatDate(item.completedAt.toString());

    const { user } = useUser();
    return (
        <Container>
            <FooterItem title={item.type.name} />
            <FooterItem title={`$ ${item.amount}`} icon={<TbMoneybag />} />
            <FooterItem title={formatedDate} icon={<TbCalendar />} />
            <FooterItem title={item.category.name || ''} icon={<TbTag />} />
            <FooterItem title={user?.id || ''} />
        </Container >
    )
}
export default TransactionFooter;
