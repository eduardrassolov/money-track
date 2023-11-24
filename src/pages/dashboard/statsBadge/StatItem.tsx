import convertToOneCurrency from '../../../services/createData'
import { ITransaction } from '../../../interface/ITransactions';
import { ICurrency } from '../../../utils/hooks/useCurrency';
import styled from 'styled-components';

function getSummaryTransaction(transaction: ITransaction[]) {
    return transaction.reduce((acc, cur) => acc + cur.amount, 0);
}

interface IStatItem {
    transaction: ITransaction[] | undefined;
    currency: ICurrency;
    color: string,
    label: string,
    icon: JSX.Element
}

const StyledStat = styled.div`
    border: 1px solid ${props => props.theme.border};
    padding: 1.5rem 2rem;
    border-radius: 12px;
    color: ${props => props.theme.text};
    display: flex;
    gap: 1.5rem;
    align-items: center;
`

const Title = styled.h5`
    font-size: 1rem;
    font-weight: 500;
    margin: 0;
`
const Amount = styled.p<{ $transctionType: string }>`
    margin: 0;
    font-size: 0.8rem;
    color: ${props => props.$transctionType};
`
const InfomationBlock = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
`

export default function StatItem({ transaction, currency, color, label, icon }: IStatItem) {
    const convertedTransaciton = convertToOneCurrency(transaction, currency);
    const total = getSummaryTransaction(convertedTransaciton);
    const formattedAmount = Intl.NumberFormat("en-IN", { style: "currency", currency: currency?.shortName || "USD" }).format(total);

    return (
        <StyledStat >
            {icon}

            <InfomationBlock>
                <Title>{label}</Title>
                <Amount $transctionType={color}>{formattedAmount}</Amount>
            </InfomationBlock>

        </StyledStat>
    )
}
