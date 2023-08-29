import { styled } from "styled-components";
import Header from "../../ui/header/Header";
import TYPES_TRANSACTION from "../../config/typeTransactions";
import { loaderExpenses } from "./loader";
import { QUERY_KEY } from "../../config/queryClientKeys";
import TransactionForm from "../../components/newTransaction/FormTransaction";
import TransactionArr from "../transactions/TransactionArr";

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
        flex-direction: column;
    }
`

const FormDiv = styled.div`
  grid-area: 2 / 1 / 3 / 2; 
`
const ListDiv = styled.div`
  grid-area: 2 / 2 / 3 / 3;  
  border-radius: 7px;
`

export default function Expenses() {
  return (
    <>
      <Header>Expenses</Header>

      <StyledDiv>
        <FormDiv>
          <TransactionForm type={TYPES_TRANSACTION.EXPENSE} />
        </FormDiv>

        <ListDiv>
          <TransactionArr listType={QUERY_KEY.EXPENSES} loader={loaderExpenses} />
        </ListDiv>
      </StyledDiv>
    </>
  )
}
