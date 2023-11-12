import styled from "styled-components";
import { ISummary, getDataSummmary } from "../../utils/helpers/getStats";
import { Header } from "../../ui/header/Header";
import CategoryChart from "./categoryChart/CategoryChart";
import { ITransaction } from "../../interface/ITransactions";
import convertToOneCurrency from "../../services/createData";
import createDiagramData from "./createDiagramData";
import { ICurrency } from "../../utils/hooks/useCurrency";


interface IPieDiagram {
    label: string;
    data: ISummary[];
    transactions: ITransaction[];
    currency: ICurrency;
}

const StyledContainer = styled.div`
    background: ${prev => prev.theme.background};
    border-radius: 12px;
    padding: 2rem 1rem 1rem;
    border: 1px solid ${props => props.theme.border};
    min-width: 320px;
`

export default function PieItem({ label, transactions, currency }: IPieDiagram) {
    const { symbol } = currency;
    const convertedTransactions = convertToOneCurrency(transactions, currency);
    const data = getDataSummmary(convertedTransactions)

    console.log(data);

    return (
        <StyledContainer>
            <Header text={label} />
            <CategoryChart data={data} />
        </StyledContainer>
    )
}
