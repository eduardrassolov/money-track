import TYPES_TRANSACTION from "../../config/typeTransactions";
import { loaderExpenses } from "./loader";
import { QUERY_KEY } from "../../config/queryClientKeys";

import TransactionList from "../transactions/TransactionList";
import { Container, FormDiv, ListDiv } from "../../styles/TransactionContainer";
import Operation from "../../components/operations/Operations";
import CreateNewTransactionForm from "../../components/newTransaction/CreateNewTransaction";
import { useRef } from "react";
// import CategoryBadgesList from "../../components/badges/CategoryBadges";

export default function Expenses() {
  // const { defaultCurrency } = useDefaultCurrency();
  // const total = transactions?.reduce((acc, cur) => acc + cur.amount, 0) || 0;
  const divRef = useRef<HTMLDivElement>(null);
  const moveToTop = () => divRef?.current?.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <>
      <Container>
        <FormDiv>
          <CreateNewTransactionForm type={TYPES_TRANSACTION.EXPENSE} />
        </FormDiv>

        <ListDiv ref={divRef}>
          <Operation />
          <TransactionList listType={QUERY_KEY.EXPENSES} loader={loaderExpenses} scrollToTop={moveToTop} />
        </ListDiv>
      </Container>
    </>
  )
}
