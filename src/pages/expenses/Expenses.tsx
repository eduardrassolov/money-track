import { styled } from "styled-components";
import Header from "../../components/header/Header";
import NewExpense from "./NewExpense";
import ExpensesList from "./ExpensesList";

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
export default function Expenses() {
  return (
    <>
      <Header>Expenses</Header>

      <StyledDiv>
        <NewExpense />
        <ExpensesList />
      </StyledDiv>
    </>
  )
}
