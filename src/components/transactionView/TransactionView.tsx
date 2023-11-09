import styled from "styled-components";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Container } from "../../styles/TransactionContainer";
import { useUser } from "../../utils/hooks/useUser";
import { useBoundStore } from "../../store/store";
import useSort from "../../utils/hooks/useSort";
import { SortBy } from "../../types/sortBy.type";
import { Filter } from "../../types/filterBy.type";
import { ITransaction } from "../../interface/ITransactions";
import useFilter from "../../utils/hooks/useFilter";
import TransactionsList from "./TransactionsList";
import LoadingUi from "../spinner/LoadingUi";
import Pagination from "../pagination/Pagination";
import { searchTransactionsByMask } from "../../utils/helpers/searchTransactionsByMask";
import { DEFAULT_ITEMS_PER_PAGE } from "../../config/paginationItems";
import usePagination from "../../utils/hooks/usePagination";
import DateFilter from "../dateRangePicker/DateFilter";
import { devices } from "../../config/breakPoints";
import apiDeleteTransaction from "../../services/api/deleteTransaction";
import { useState } from "react";
import useNewTransaction from "../createTransaction/useNewTransaction";
import { CreateNewTransactionForm } from "../newTransaction/CreateNewTransaction";
import { toast } from "react-toastify";
import { QUERY_KEY } from "../../config/queryClientKeys";
import TYPES_TRANSACTION from "../../config/typeTransactions";

interface ITransactionView {
    // transactionType: number,
    queryKey: string;
    dataLoader: (userId: string, filter: Filter, sortBy: SortBy, from: string, to: string) => Promise<ITransaction[]>;
}

const Header = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem 0;
    border-bottom: 1px solid ${(props) => props.theme.border};

    @media only screen and (min-width: ${devices.sm}px) {
        justify-content: space-between;
        flex-direction: row;
    }
`;

const Text = styled.p`
    font-size: 1rem;
    margin: 0;
    padding: 0;
    color: ${(props) => props.theme.text};
`;

const Div = styled.div`
    display: flex;
    @media only screen and (min-width: ${devices.md}px) {
        display: grid;
        grid-template-columns: minmax(350px, 600px) minmax(200px, 400px);
        height: 100%;
    }
`;

const StyledHeaderContainer = styled.header`
    display: flex;
    align-items: center;
    gap: 1rem;
    margin: 1rem 0;
    width: 100%;
`;

const H1 = styled.h1`
    font-size: 1.2rem;
    font-weight: 500;
    margin: 0;
`;



export default function TransactionView({ queryKey, dataLoader }: ITransactionView) {
    const { user } = useUser();
    if (!user) {
        return null;
    }

    const { id: userId } = user;
    const [from, to] = useBoundStore((state) => state.range);
    const mask = useBoundStore((state) => state.search);

    const sortBy: SortBy = useSort();
    const { filter } = useFilter();
    const { currPage } = usePagination();


    const { data: filteredTransactionData, isLoading } = useQuery({
        queryKey: [userId, queryKey, from, to, sortBy],
        queryFn: () => dataLoader(userId, filter, sortBy, from, to),
    });



    const transactionsWithSearchMask = searchTransactionsByMask(filteredTransactionData, mask);
    const numberTransactionsPerPage = Number(localStorage.getItem("transactionPerPage")) || DEFAULT_ITEMS_PER_PAGE;
    const trasactions = transactionsWithSearchMask?.slice((currPage - 1) * numberTransactionsPerPage, currPage * numberTransactionsPerPage);

    const queryClient = useQueryClient();
    const { mutate: deleteTransaction } = useMutation({ mutationFn: apiDeleteTransaction, onSuccess: succesHandle });
    function succesHandle() {
        toast.success('Successfully deleted.');
        queryClient.invalidateQueries({ queryKey: [userId, queryKey, from, to, sortBy] });
    }

    return (
        <Div>
            <Container>
                {queryKey === QUERY_KEY.TRANSACTIONS ? "" :
                    <StyledHeaderContainer>
                        <CreateNewTransactionForm type={queryKey === QUERY_KEY.INCOMES ? TYPES_TRANSACTION.INCOME : TYPES_TRANSACTION.EXPENSE} />
                    </StyledHeaderContainer>
                }

                <Header>
                    <Text>Date range: </Text>
                    <DateFilter />
                </Header>

                {isLoading || !trasactions ? (
                    <LoadingUi />
                ) : (
                    <TransactionsList transactions={trasactions} onDeleteTransaction={deleteTransaction} />
                )}

                <Pagination maxLength={transactionsWithSearchMask?.length} />
            </Container>
        </Div>
    );
}
