
import TYPES_TRANSACTION from "../../config/typeTransactions";
import { loaderExpenses } from "./loader";
import { QUERY_KEY } from "../../config/queryClientKeys";
import TransactionForm from "../../components/newTransaction/FormTransaction";
import TransactionArr from "../transactions/TransactionList";
import { Container, FormDiv, ListDiv } from "../../styles/TransactionContainer";
import Operation from "../../components/operations/Operations";
import CategoryBadgesList from "../../components/badges/CategoryBadges";

export default function Expenses() {
  // const { defaultCurrency } = useDefaultCurrency();


  //TODO refactor 


  // const total = transactions?.reduce((acc, cur) => acc + cur.amount, 0) || 0;

  return (
    <>
      <Container>

        <FormDiv>
          <TransactionForm type={TYPES_TRANSACTION.EXPENSE} />
        </FormDiv>

        <ListDiv>

          <>
            {/* <Header text={`Total expenses: ${defaultCurrency} ${formatNumberWithSpaces(total)}`} /> */}
            <Operation />
            {/* <CategoryBadgesList transactionType={TYPES_TRANSACTION.EXPENSE} /> */}

            <TransactionArr listType={QUERY_KEY.EXPENSES} loader={loaderExpenses} />
          </>

        </ListDiv>

      </Container>
    </>
  )
}
