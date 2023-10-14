import TYPES_TRANSACTION from "../../config/typeTransactions";

import { QUERY_KEY } from "../../config/queryClientKeys";

import { loaderIncomes } from "./loader";
import TransactionList from "../transactions/TransactionList";
import { Container, FormDiv, ListDiv } from "../../styles/TransactionContainer";
import Operation from "../../components/operations/Operations";
import CreateNewTransactionForm from "../../components/newTransaction/CreateNewTransaction";
// import CategoryBadgesList from "../../components/badges/CategoryBadges";

export default function Incomes() {
    // const { transactions, defaultCurrency }

    // const total = transactions?.reduce((acc, cur) => acc + cur.amount, 0) || 0;
    return (
        <>
            <Container>
                <FormDiv>
                    <CreateNewTransactionForm type={TYPES_TRANSACTION.INCOME} />
                </FormDiv>

                <ListDiv>
                    {/* <Header text={`Total incomes: ${defaultCurrency} ${formatNumberWithSpaces(total)}`} /> */}

                    <Operation />

                    {/* <CategoryBadgesList transactionType={TYPES_TRANSACTION.INCOME} /> */}

                    <TransactionList listType={QUERY_KEY.INCOMES} loader={loaderIncomes} />

                </ListDiv>
            </Container>
        </>

    )
}
