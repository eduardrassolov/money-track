import TYPES_TRANSACTION from "../../config/typeTransactions";

import { QUERY_KEY } from "../../config/queryClientKeys";

import { loaderIncomes } from "./loader";
import TransactionList from "../transactions/TransactionList";
import { Container, FormDiv, ListDiv } from "../../styles/TransactionContainer";
import Operation from "../../components/operations/Operations";
import CreateNewTransactionForm from "../../components/newTransaction/CreateNewTransaction";
import { useRef } from "react";
// import CategoryBadgesList from "../../components/badges/CategoryBadges";

export default function Incomes() {
    // const { transactions, defaultCurrency }

    // const total = transactions?.reduce((acc, cur) => acc + cur.amount, 0) || 0;
    const divRef = useRef<HTMLDivElement>(null);
    const moveToTop = () => divRef?.current?.scrollTo({ top: 0, behavior: 'smooth' });

    return (
        <>
            <Container>
                <FormDiv>
                    <CreateNewTransactionForm type={TYPES_TRANSACTION.INCOME} />
                </FormDiv>

                <ListDiv>
                    <Operation />
                    <TransactionList listType={QUERY_KEY.INCOMES} loader={loaderIncomes} scrollToTop={moveToTop} />
                </ListDiv>
            </Container>
        </>

    )
}
