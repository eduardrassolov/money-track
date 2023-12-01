import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import dayjs from "dayjs";
import isBetween from "dayjs/plugin/isBetween";

import { Container } from "../../styles/TransactionContainer";
import { useUser } from "../../utils/hooks/useUser";
import { useBoundStore } from "../../store/store";

import TransactionsList from "./TransactionsList";
import LoadingUi from "../../components/spinner/LoadingUi";
import Pagination from "../../components/pagination/Pagination";
import { searchTransactionsByMask } from "../../utils/helpers/searchTransactionsByMask";
import usePagination from "../../components/pagination/usePagination";
import apiDeleteTransaction from "../../services/api/deleteTransaction";
import { CreateNewTransactionForm } from "../../components/newTransaction/CreateNewTransaction";
import { QUERY_KEY } from "../../config/queryClientKeys";
import TYPES_TRANSACTION from "../../config/typeTransactions";

import { loadTransactions } from "./loadTransactions";
import { sortBy } from "../dashboard/pie/PieView";
import HeaderTransactionView from "./header/HeaderTransactionView";

import getAppSettings from "../settings/tabs/appSettingsTab/getAppSettings";
import { Section, StyledHeaderContainer } from "./transactionView.style";

dayjs.extend(isBetween);

interface ITransactionView {
    queryKey: string;
}

export default function TransactionView({ queryKey }: ITransactionView) {
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

    const transactionWithDateRange = data?.filter((transaction) => {
        const date = dayjs(transaction.completedAt).format("YYYY-MM-DD");
        if (dayjs(date).isBetween(from, to, "day", "[]")) {
            return transaction;
        }
    });

    const transactionsWithSearchMask = searchTransactionsByMask(transactionWithDateRange, mask);
    const trasactions = transactionsWithSearchMask?.slice((currPage - 1) * (settings?.itemsPerPage || 10), currPage * (settings?.itemsPerPage || 10));

    const { mutate: deleteTransaction } = useMutation({ mutationFn: apiDeleteTransaction, onSuccess: succesHandle });

    function succesHandle() {
        toast.success("Successfully deleted.");
        queryClient.invalidateQueries({ queryKey: [userId, queryKey, from, to, sortBy] });
    }

    return (
        <Section>
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

                <Pagination transactionsPerPage={settings?.itemsPerPage || 10} maxLength={transactionsWithSearchMask?.length} />
            </Container>
        </Section>
    );
}
