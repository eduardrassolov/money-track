import TYPES_TRANSACTION from "../../config/typeTransactions";

import { QUERY_KEY } from "../../config/queryClientKeys";
import TransactionForm from "../../components/newTransaction/FormTransaction";

import { loaderIncomes } from "./loader";
import TransactionArr from "../transactions/TransactionList";
import { Container, FormDiv, ListDiv } from "../../styles/TransactionContainer";
import Operation from "../../components/operations/Operations";
import usePagination from "../../utils/hooks/usePagination";

export default function Incomes() {
    // const { transactions, defaultCurrency }

    // const total = transactions?.reduce((acc, cur) => acc + cur.amount, 0) || 0;
    return (
        <>
            <Container>
                <FormDiv>
                    <TransactionForm type={TYPES_TRANSACTION.INCOME} />
                </FormDiv>

                <ListDiv>
                    {/* <Header text={`Total incomes: ${defaultCurrency} ${formatNumberWithSpaces(total)}`} /> */}

                    <Operation />

                    <TransactionArr listType={QUERY_KEY.INCOMES} loader={loaderIncomes} />

                </ListDiv>
            </Container>
        </>

    )
}
