import { styled } from "styled-components";
import Header from "../../components/header/Header";
import NewExpense from "./NewExpense";
import ExpensesList from "./ExpensesList";
import { useLoaderData } from "react-router";
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
export default function Expenses() {
  const data = useLoaderData();
  if (!Array.isArray(data) || !data.length) return null;

  const totalExpenses: number = data.reduce((acc: number, curr: ITransaction) => acc + curr.amount, 0);

  return (
    <>
      <Header>Expenses</Header>

      <Stats text="Total Expenses: $" calcValue={totalExpenses} />

      <StyledDiv>
        <NewExpense />
        <ExpensesList />
      </StyledDiv>
    </>
  )
}
