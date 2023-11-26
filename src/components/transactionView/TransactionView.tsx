import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import dayjs from "dayjs";
import isBetween from "dayjs/plugin/isBetween";

import { Container } from "../../styles/TransactionContainer";
import { useUser } from "../../utils/hooks/useUser";
import { useBoundStore } from "../../store/store";

import TransactionsList from "./TransactionsList";
import LoadingUi from "../spinner/LoadingUi";
import Pagination from "../pagination/Pagination";
import { searchTransactionsByMask } from "../../utils/helpers/searchTransactionsByMask";
import { DEFAULT_ITEMS_PER_PAGE } from "../../config/paginationItems";
import usePagination from "../pagination/usePagination";
import apiDeleteTransaction from "../../services/api/deleteTransaction";
import { CreateNewTransactionForm } from "../newTransaction/CreateNewTransaction";
import { QUERY_KEY } from "../../config/queryClientKeys";
import TYPES_TRANSACTION from "../../config/typeTransactions";

import { loadTransactions } from "./loadTransactions";
import { sortBy } from "../../pages/dashboard/pie/PieView";
import HeaderTransactionView from "./header/HeaderTransactionView";
import { Main, StyledHeaderContainer } from "./TransactionView.style";
import getAppSettings from "../../pages/settings/tabs/appSettingsTab/getAppSettings";

dayjs.extend(isBetween);

interface ITransactionView {
    queryKey: string;
}

export default function TransactionView({ queryKey }: ITransactionView) {
    // const numberTransactionsPerPage = Number(localStorage.getItem("transactionPerPage")) || DEFAULT_ITEMS_PER_PAGE;
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
        queryKey: [userId, queryKey],
        queryFn: () => loadTransactions(userId, queryKey),
    });

    const { data: settings } = useQuery({
        queryKey: ["userSettings"],
        queryFn: () => getAppSettings(user.id)
    });

    console.log(settings);


    const transactionWithDateRange = data?.filter((transaction) => {
        const date = dayjs(transaction.completedAt).format("YYYY-MM-DD");
        if (dayjs(date).isBetween(from, to, "day", "[]")) {
            return transaction;
        }
    });
    const transactionsWithSearchMask = searchTransactionsByMask(transactionWithDateRange, mask);
    console.log(transactionsWithSearchMask);
    const trasactions = transactionsWithSearchMask?.slice((currPage - 1) * settings?.itemsPerPage, currPage * settings?.itemsPerPage);

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

                <Pagination transactionsPerPage={settings?.itemsPerPage} maxLength={transactionsWithSearchMask?.length} />
            </Container>
        </Main>
    );
}
