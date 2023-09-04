import TYPES_TRANSACTION from "../../config/typeTransactions";

import { QUERY_KEY } from "../../config/queryClientKeys";
import TransactionForm from "../../components/newTransaction/FormTransaction";

import { loaderIncomes } from "./loader";
import TransactionArr from "../transactions/TransactionList";
import { Container, FormDiv, ListDiv } from "../../styles/TransactionContainer";
import Header from "../../ui/header/Header";
import Filter from "../../components/filter/Filter";
import Sort from "../../components/sort/Sort";
import { FILTER_DATE_OPTIONS, FILTER_KEYS } from "../../components/filter/filterParameters";
import { Operations } from "../transactions/Transactions.page";
import { useQuery } from "@tanstack/react-query";
import formatNumberWithSpaces from "../../utils/helpers/formatWithSpace";
import { defaultSort } from "../transactions/loader";
import { useUser } from "../../utils/hooks/useUser";

export default function Incomes() {
    const { user } = useUser();
    if (!user) {
        return;
    }

    //TODO refactor
    const { data: transactions } = useQuery({ queryKey: [QUERY_KEY.INCOMES, null, { field: 'completed_at', direction: 'desc' }], queryFn: () => loaderIncomes({ filter: null, sortBy: { ...defaultSort }, userId: user.id }) });

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
                            <Operations>
                                <Filter options={FILTER_DATE_OPTIONS} filterKey={FILTER_KEYS.DATE} />
                                <Sort />
                            </Operations>

                            <TransactionArr listType={QUERY_KEY.INCOMES} loader={loaderIncomes} />
                        </>}

                </ListDiv>

            </Container>
        </>

    )
}
