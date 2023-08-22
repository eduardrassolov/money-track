import { useLoaderData } from "react-router"
import Header from "../../ui/header/Header";
import { styled } from "styled-components";
import IncomesList from "./IncomesList";
import { ITransaction } from "../../interface/ITransactions";
import Stats from "../../components/stats/Stats";
import NewTransactionForm from "../../components/newTransaction/NewTransactionForm";
import TYPES_TRANSACTION from "../../config/typeTransactions";
import { FormContainer, ListContainer, StatsContainer, StyledGrid } from "../../styles/gridLayout";



export default function Incomes() {
    const data = useLoaderData();

    const totalIncomes: number = data?.reduce((acc: number, curr: ITransaction) => acc += curr.amount, 0);

    return (
        <>
            <Header>Incomes</Header>

            <StyledGrid>
                <StatsContainer>
                    <Stats text="Total Incomes: " calcValue={totalIncomes} />
                </StatsContainer>

                <FormContainer>
                    <NewTransactionForm type={TYPES_TRANSACTION.INCOME} />
                </FormContainer>

                <ListContainer>
                    <IncomesList />
                </ListContainer>

            </StyledGrid>
        </>

    )
}
