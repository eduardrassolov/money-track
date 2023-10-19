import TYPES_TRANSACTION from "../../config/typeTransactions";
import { loaderExpenses } from "./loader";
import { QUERY_KEY } from "../../config/queryClientKeys";

import TransactionList from "../transactions/TransactionList";
import { Container, FormDiv, ListDiv } from "../../styles/TransactionContainer";
import Operation from "../../components/operations/Operations";
import CreateNewTransactionForm from "../../components/newTransaction/CreateNewTransaction";
// import CategoryBadgesList from "../../components/badges/CategoryBadges";

export default function Expenses() {
  return (
    <Container>
      <FormDiv>
        <CreateNewTransactionForm type={TYPES_TRANSACTION.EXPENSE} />
      </FormDiv>

      <ListDiv>
        <Operation />
        <TransactionList listType={QUERY_KEY.EXPENSES} loader={loaderExpenses} />
      </ListDiv>
    </Container>
  )
}
