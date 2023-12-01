import { useQuery } from "@tanstack/react-query";
import dayjs from "dayjs";
import isBetween from "dayjs/plugin/isBetween";
import { lazy } from "react";

import { useUser } from "../../utils/hooks/useUser.tsx";
import { SortBy } from "../../types/sortBy.type.ts";
import { QUERY_KEY } from "../../config/queryClientKeys.ts";
import { useBoundStore } from "../../store/store.tsx";
import Diagram from "./diagram/Diagram.tsx";
import DateFilter from "./periodInterval/PeriodInterval.tsx";
import { useUserSettings } from "../../utils/hooks/useUserSettings.tsx";
import StatList from "./statsBadge/StatList.tsx";
import { apiLoadTransactions } from "./apiLoadTransactions.ts";
import { DateFilterContainer, Main } from "./Dashboard.page.style.ts";

const PieView = lazy(() => import("./pie/PieView.tsx"));

const sortBy: SortBy = { field: "completed_at", direction: "asc" };
dayjs.extend(isBetween);


export default function Dashboard() {
    const { user } = useUser();
    if (!user) {
        return null;
    }
    const { id: userId } = user;

    const [from, to] = useBoundStore((state) => state.range);

    const { data: transactions, isLoading } = useQuery({
        queryKey: [userId, QUERY_KEY.TRANSACTIONS, sortBy],
        queryFn: () => {
            return apiLoadTransactions(userId, sortBy);
        },
    });

    const { userSettings } = useUserSettings(userId);

    const filteredTransactionByRange = transactions?.filter((transaction) => {
        const date = dayjs(transaction.completedAt).format("YYYY-MM-DD");
        if (dayjs(date).isBetween(from, to, "day", "[]")) {
            return transaction;
        }
    });

    return (
        <Main>
            <DateFilterContainer>
                <DateFilter />
            </DateFilterContainer>

            {!userSettings?.defaultCurrency ? "" : <StatList user={user} currency={userSettings.defaultCurrency} />}

            {!filteredTransactionByRange ? "" : <Diagram transactions={filteredTransactionByRange} userId={userId} isLoading={isLoading} />}

            {/* @ts-ignore */}
            {!userSettings ? "" : <PieView user={user} currency={userSettings.defaultCurrency} />}
        </Main >
    );
}
