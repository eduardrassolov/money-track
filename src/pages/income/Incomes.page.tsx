import TYPES_TRANSACTION from "../../config/typeTransactions";

import { QUERY_KEY } from "../../config/queryClientKeys";
import TransactionForm from "../../components/newTransaction/FormTransaction";

import { loaderIncomes } from "./loader";
import TransactionArr from "../transactions/TransactionList";
import { Container, FormDiv, ListDiv } from "../../styles/TransactionContainer";
import Header from "../../ui/header/Header";
import { useQuery } from "@tanstack/react-query";
import formatNumberWithSpaces from "../../utils/helpers/formatWithSpace";
import { defaultSort } from "../transactions/loader";
import { useUser } from "../../utils/hooks/useUser";

import Operation from "../../components/operations/Operations";

export default function Incomes() {
    const { user } = useUser();
    if (!user) {
        return;
    }

    const { id: userId } = user;

    //TODO refactor
    const { data: transactions } =
        useQuery({
            queryKey: [userId, QUERY_KEY.INCOMES, null, { ...defaultSort }],
            queryFn: () => loaderIncomes(userId),
        });

    const total = transactions?.reduce((acc, cur) => acc + cur.amount, 0) || 0;
    return (
        <>
            <Container>
                <FormDiv>
                    <TransactionForm type={TYPES_TRANSACTION.INCOME} />
                </FormDiv>

                <ListDiv>
                    <Header text={`Total incomes: $${formatNumberWithSpaces(total)}`} />

                    {!transactions?.length ?
                        '' :
                        <>
                            <Operation />

                            <TransactionArr listType={QUERY_KEY.INCOMES} loader={loaderIncomes} />
                        </>}

                </ListDiv>
            </Container>
        </>

    )
}
