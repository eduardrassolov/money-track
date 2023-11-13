import styled from "styled-components";
import { ISummary, getDataSummmary } from "../../utils/helpers/getStats";
import { Header } from "../../ui/header/Header";
import CategoryChart from "./categoryChart/CategoryChart";
import { ITransaction } from "../../interface/ITransactions";
import convertToOneCurrency from "../../services/createData";
import createDiagramData from "./createDiagramData";
import { ICurrency } from "../../utils/hooks/useCurrency";
import { devices } from "../../config/breakPoints";


interface IPieDiagram {
    label: string;
    data: ISummary[];
    transactions: ITransaction[];
    currency: ICurrency;
}

const StyledContainer = styled.div`    
    display: flex;
    flex-direction: column;
    background: ${prev => prev.theme.background};
    border-radius: 12px;
    border: 1px solid ${props => props.theme.border};
    width: 100%;


    @media only screen and (min-width: ${devices.md}px){
        width: 50%;
    }
`


export default function PieItem({ label, transactions, currency }: IPieDiagram) {
    const { symbol } = currency;

    const convertedTransactions = convertToOneCurrency(transactions, currency);
    console.log("dddd", convertedTransactions);
    const data = getDataSummmary(convertedTransactions)

    console.log(data);

    return (
        <StyledContainer>
            <Header text={label} />
            <CategoryChart data={data} />
        </StyledContainer>
    )
}


