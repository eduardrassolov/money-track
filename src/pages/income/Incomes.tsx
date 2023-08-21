import { useLoaderData } from "react-router"
import Header from "../../ui/header/Header";
import { styled } from "styled-components";
import IncomesList from "./IncomesList";
import { ITransaction } from "../../interface/ITransactions";
import Stats from "../../components/stats/Stats";
import NewTransactionForm from "../../components/newTransaction/NewTransactionForm";
import TYPES_TRANSACTION from "../../config/typeTransactions";

const StyledDiv = styled.div`
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 1rem;
    width: 95%;

    @media (max-width: 800px){
        display: flex;
        flex-direction: column;
    }
`

export default function Incomes() {
    const data = useLoaderData();

    const totalIncomes: number = data?.reduce((acc: number, curr: ITransaction) => acc += curr.amount, 0);

    return (
        <>
            <Header>Incomes</Header>
            <Stats text="Total Incomes: $" calcValue={totalIncomes} />

            <StyledDiv>
                <NewTransactionForm type={TYPES_TRANSACTION.INCOME} />
                <IncomesList />
            </StyledDiv>
        </>

    )
}
