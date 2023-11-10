import TYPES_TRANSACTION from "../../config/typeTransactions";

import { QUERY_KEY } from "../../config/queryClientKeys";

import { loaderIncomes } from "./loader";
import TransactionList from "../transactions/TransactionList";
import { Container, ListDiv } from "../../styles/TransactionContainer";
import Operation from "../../components/operations/Operations";
import { CreateNewTransactionForm } from "../../components/newTransaction/CreateNewTransaction";

export default function Incomes() {

    return (
        <Container>
            <CreateNewTransactionForm type={TYPES_TRANSACTION.INCOME} />

            <ListDiv>
                <Operation />
                <TransactionList listType={QUERY_KEY.INCOMES} loader={loaderIncomes} />
            </ListDiv>
        </Container>
    )
}
