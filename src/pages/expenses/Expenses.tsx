import { styled } from "styled-components";
import Header from "../../ui/header/Header";
import { useLoaderData } from "react-router";
import { ITransaction } from "../../interface/ITransactions";
import Stats from "../../components/stats/Stats";
import NewTransactionForm from "../../components/newTransaction/NewTransactionForm";
import TYPES_TRANSACTION from "../../config/typeTransactions";
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
  const data = useLoaderData();
  // if (!Array.isArray(data) || !data.length) return null;

  const totalExpenses: number = data.reduce((acc: number, curr: ITransaction) => acc + curr.amount, 0);

  return (
    <>
      <Header>Expenses</Header>

      <Stats text="Total Expenses: $" calcValue={totalExpenses} />

      <StyledDiv>
        <NewTransactionForm type={TYPES_TRANSACTION.EXPENSE} />
        <ExpensesList />
      </StyledDiv>
    </>
  )
}
