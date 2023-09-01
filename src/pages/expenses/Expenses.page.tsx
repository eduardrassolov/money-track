
import TYPES_TRANSACTION from "../../config/typeTransactions";
import { loaderExpenses } from "./loader";
import { QUERY_KEY } from "../../config/queryClientKeys";
import TransactionForm from "../../components/newTransaction/FormTransaction";
import TransactionArr from "../transactions/TransactionList";
import { Container, FormDiv, ListDiv } from "../../styles/TransactionContainer";
import Filter from "../../components/filter/Filter";
import { FILTER_DATE_OPTIONS, FILTER_KEYS } from "../../components/filter/filterParameters";
import Header from "../../ui/header/Header";
import { Operations } from "../transactions/Transactions.page";
import Sort from "../../components/sort/Sort";
import formatNumberWithSpaces from "../../helpers/formatWithSpace";
import { useQuery } from "@tanstack/react-query";

export default function Expenses() {
  const { data: transactions } = useQuery({ queryKey: [QUERY_KEY.EXPENSES, null, { field: 'completed_at', direction: 'desc' }], queryFn: loaderExpenses });

  const total = transactions?.reduce((acc, cur) => acc + cur.amount, 0) || 0;
  console.log(transactions?.length);
  return (
    <>
      <Container>
        <FormDiv>
          <TransactionForm type={TYPES_TRANSACTION.EXPENSE} />
        </FormDiv>

        <ListDiv>
          <Header text={`Total expenses: $${formatNumberWithSpaces(total)}`} />


          {!transactions?.length ?
            '' :
            <>
              <Operations>
                <Filter options={FILTER_DATE_OPTIONS} filterKey={FILTER_KEYS.DATE} />
                <Sort />
              </Operations>

              <TransactionArr listType={QUERY_KEY.EXPENSES} loader={loaderExpenses} />
            </>}

        </ListDiv>

      </Container>
    </>
  )
}
