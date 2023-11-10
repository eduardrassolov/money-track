import TYPES_TRANSACTION from "../../config/typeTransactions";
import { loaderExpenses } from "./loader";
import { QUERY_KEY } from "../../config/queryClientKeys";

import TransactionList from "../transactions/TransactionList";
import { Container, ListDiv } from "../../styles/TransactionContainer";
import Operation from "../../components/operations/Operations";
import { CreateNewTransactionForm } from "../../components/newTransaction/CreateNewTransaction";

export default function Expenses() {
  return (
    <Container>
      <CreateNewTransactionForm type={TYPES_TRANSACTION.EXPENSE} />

      <ListDiv>
        <Operation />
        <TransactionList listType={QUERY_KEY.EXPENSES} loader={loaderExpenses} />
      </ListDiv>
    </Container>
  )
}
