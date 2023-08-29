import TYPES_TRANSACTION from "../../config/typeTransactions";

import { QUERY_KEY } from "../../config/queryClientKeys";
import TransactionForm from "../../components/newTransaction/FormTransaction";

import { loaderIncomes } from "./loader";
import TransactionArr from "../transactions/TransactionArr";
import { Container, FormDiv, ListDiv } from "../../styles/TransactionContainer";

export default function Incomes() {
    return (
        <>
            <Container>
                <FormDiv>
                    <TransactionForm type={TYPES_TRANSACTION.INCOME} />
                </FormDiv>

                <ListDiv>
                    <TransactionArr listType={QUERY_KEY.INCOMES} loader={loaderIncomes} />
                </ListDiv>

            </Container>
        </>

    )
}
