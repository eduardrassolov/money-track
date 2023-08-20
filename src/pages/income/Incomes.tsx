import { useLoaderData } from "react-router"
import Header from "../../components/header/Header";
import NewIncome from "./NewIncome";
import { styled } from "styled-components";
import IncomesList from "./IncomesList";

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
    console.log(data);
    return (
        <>
            <Header>Incomes</Header>

            <StyledDiv>
                <NewIncome />
                <IncomesList />
            </StyledDiv>
        </>

    )
}
