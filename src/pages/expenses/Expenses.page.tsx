import { styled } from "styled-components";
import Header from "../../ui/header/Header";
import { useLoaderData } from "react-router";
import { ITransaction } from "../../interface/ITransactions";
import Stats from "../../components/stats/Stats";
import NewTransactionForm from "../../components/newTransaction/NewTransactionForm";
import TYPES_TRANSACTION from "../../config/typeTransactions";
import TransactionsList from "../../components/transactionCard/TransactionsList";

const StyledDiv = styled.div`
    display: grid;
    grid-template-columns: 1fr 3fr;
    grid-template-rows: auto;
    grid-column-gap: 1.2rem;
    grid-row-gap: 1rem;
    margin: 1rem;
    max-width: 800px;

    @media (max-width: 900px){
        display: flex;
        /* width: 90%; */
        flex-direction: column;
    }
`
const StatsDiv = styled.div`
   grid-area: 1 / 1 / 2 / 3; 
   border: 1px solid #ccc;
   border-radius: 7px;
`
const FormDiv = styled.div`
  grid-area: 2 / 1 / 3 / 2; 
`
const ListDiv = styled.div`
  grid-area: 2 / 2 / 3 / 3;  
  border-radius: 7px;
`

export default function Expenses() {
  const data = useLoaderData() as Array<ITransaction> | undefined;

  if (!data)
    return;

  const totalExpenses: number = data.reduce((acc: number, curr: ITransaction) => acc + curr.amount, 0);

  return (
    <>
      <Header>Expenses</Header>

      <StyledDiv>
        <StatsDiv>
          <Stats text="Total Expenses: " calcValue={totalExpenses} />
        </StatsDiv>

        <FormDiv>
          <NewTransactionForm type={TYPES_TRANSACTION.EXPENSE} />
        </FormDiv>

        <ListDiv>
          <TransactionsList />
        </ListDiv>
      </StyledDiv>
    </>
  )
}
