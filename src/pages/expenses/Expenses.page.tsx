
import TYPES_TRANSACTION from "../../config/typeTransactions";
import { loaderExpenses } from "./loader";
import { QUERY_KEY } from "../../config/queryClientKeys";
import TransactionForm from "../../components/newTransaction/FormTransaction";
import TransactionArr from "../transactions/TransactionList";
import { Container, FormDiv, ListDiv } from "../../styles/TransactionContainer";
import Header from "../../ui/header/Header";
import formatNumberWithSpaces from "../../utils/helpers/formatWithSpace";
import { useQuery } from "@tanstack/react-query";
import { useUser } from "../../utils/hooks/useUser";
import { defaultSort } from "../transactions/loader";
import Operation from "../../components/operations/Operations";

import useDefaultCurrency from "../../utils/hooks/useDefaultCurrency";

export default function Expenses() {
  const { user } = useUser();
  // const { defaultCurrency } = useDefaultCurrency();
  if (!user) {
    return;
  }
  const { id: userId } = user;

  //TODO refactor 
  const { data: transactions } = useQuery({
    queryKey: [userId, QUERY_KEY.EXPENSES, null, { ...defaultSort }],
    queryFn: () => loaderExpenses(userId)
  });

  // const total = transactions?.reduce((acc, cur) => acc + cur.amount, 0) || 0;

  return (
    <>
      <Container>

        <FormDiv>
          <TransactionForm type={TYPES_TRANSACTION.EXPENSE} />
        </FormDiv>

        <ListDiv>

          {!transactions?.length ? '' :
            <>
              {/* <Header text={`Total expenses: ${defaultCurrency} ${formatNumberWithSpaces(total)}`} /> */}
              <Operation />

              <TransactionArr listType={QUERY_KEY.EXPENSES} loader={loaderExpenses} />

            </>}

        </ListDiv>

      </Container>
    </>
  )
}
