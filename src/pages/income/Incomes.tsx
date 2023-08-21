import { useLoaderData } from "react-router"
import Header from "../../components/header/Header";
import NewIncome from "./NewIncome";
import { styled } from "styled-components";
import IncomesList from "./IncomesList";
import { ITransaction } from "../../interface/ITransactions";
import Stats from "../../components/stats/Stats";

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
    if (!Array.isArray(data) || !data.length) return null;

    const totalIncomes: number = data.reduce((acc: number, curr: ITransaction) => acc += curr.amount, 0);
    console.log(totalIncomes);

    return (
        <>
            <Header>Incomes</Header>
            <Stats text="Total Incomes: $" calcValue={totalIncomes} />

            <StyledDiv>
                <NewIncome />
                <IncomesList />
            </StyledDiv>
        </>

    )
}
