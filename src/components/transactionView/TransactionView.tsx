import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

import { Container } from "../../styles/TransactionContainer";
import { useUser } from "../../utils/hooks/useUser";
import { useBoundStore } from "../../store/store";
import { SortBy } from "../../types/sortBy.type";
import { Filter } from "../../types/filterBy.type";
import { ITransaction } from "../../interface/ITransactions";
import TransactionsList from "./TransactionsList";
import LoadingUi from "../spinner/LoadingUi";
import Pagination from "../pagination/Pagination";
import { searchTransactionsByMask } from "../../utils/helpers/searchTransactionsByMask";
import { DEFAULT_ITEMS_PER_PAGE } from "../../config/paginationItems";
import usePagination from "../../utils/hooks/usePagination";
import DateFilter from "../dateRangePicker/DateFilter";
import apiDeleteTransaction from "../../services/api/deleteTransaction";
import { CreateNewTransactionForm } from "../newTransaction/CreateNewTransaction";
import { QUERY_KEY } from "../../config/queryClientKeys";
import TYPES_TRANSACTION from "../../config/typeTransactions";
import { Main, StyledHeaderContainer } from "./transactionView.style";
import { loadTransactions } from "./loadTransactions";
import { sortBy } from "../../pages/dashboard/PieView";
import HeaderTransactionView from "./header/HeaderTransactionView";
import dayjs from "dayjs";

interface ITransactionView {
    queryKey: string;
    dataLoader: (userId: string, filter: Filter, sortBy: SortBy, from: string, to: string) => Promise<ITransaction[]>;
}

export default function TransactionView({ queryKey, dataLoader }: ITransactionView) {
    const numberTransactionsPerPage = Number(localStorage.getItem("transactionPerPage")) || DEFAULT_ITEMS_PER_PAGE;
    const { user } = useUser();
    const [from, to] = useBoundStore((state) => state.range);
    const mask = useBoundStore((state) => state.search);

    const { currPage } = usePagination();

    const queryClient = useQueryClient();

    if (!user) {
        return null;
    }

    const { id: userId } = user;

    const { data, isLoading } = useQuery({
        queryKey: [userId, queryKey, from, to],
        queryFn: () => loadTransactions(userId, queryKey, from, to),
    });

    const transactionWithDateRange = data?.filter((transaction) => {
        const date = dayjs(transaction.completedAt).format("YYYY-MM-DD");
        if (dayjs(date).isBetween(from, to, "day", "[]")) {
            return transaction;
        }
    });
    const transactionsWithSearchMask = searchTransactionsByMask(transactionWithDateRange, mask);
    const trasactions = transactionsWithSearchMask?.slice((currPage - 1) * numberTransactionsPerPage, currPage * numberTransactionsPerPage);

    const { mutate: deleteTransaction } = useMutation({ mutationFn: apiDeleteTransaction, onSuccess: succesHandle });
    function succesHandle() {
        toast.success("Successfully deleted.");
        queryClient.invalidateQueries({ queryKey: [userId, queryKey, from, to, sortBy] });
    }

    return (
        <Main>
            <Container>
                {queryKey === QUERY_KEY.TRANSACTIONS ? (
                    ""
                ) : (
                    <StyledHeaderContainer>
                        <CreateNewTransactionForm
                            type={queryKey === QUERY_KEY.INCOMES ? TYPES_TRANSACTION.INCOME : TYPES_TRANSACTION.EXPENSE}
                        />
                    </StyledHeaderContainer>
                )}

                <HeaderTransactionView />

                {isLoading || !trasactions ? (
                    <LoadingUi />
                ) : (
                    <TransactionsList transactions={trasactions} onDeleteTransaction={deleteTransaction} />
                )}

                <Pagination maxLength={transactionsWithSearchMask?.length} />
            </Container>
        </Main>
    );
}
