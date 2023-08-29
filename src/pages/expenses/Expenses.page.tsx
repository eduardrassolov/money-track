
import TYPES_TRANSACTION from "../../config/typeTransactions";
import { loaderExpenses } from "./loader";
import { QUERY_KEY } from "../../config/queryClientKeys";
import TransactionForm from "../../components/newTransaction/FormTransaction";
import TransactionArr from "../transactions/TransactionArr";
import { Container, FormDiv, ListDiv } from "../../styles/TransactionContainer";

export default function Expenses() {
  return (
    <>
      <Container>
        <FormDiv>
          <TransactionForm type={TYPES_TRANSACTION.EXPENSE} />
        </FormDiv>

        <ListDiv>
          <TransactionArr listType={QUERY_KEY.EXPENSES} loader={loaderExpenses} />
        </ListDiv>
      </Container>
    </>
  )
}
