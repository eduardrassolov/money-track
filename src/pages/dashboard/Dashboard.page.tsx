import { lazy } from "react";
import { DashboardSection } from "./Dashboard.page.style.ts";
import AnalyticsList from "./statCard/AnalyticsList.tsx";
import styled from "styled-components";
import { Text } from "../../components/transactionView/TransactionView.tsx";
import { useUser } from "../../utils/hooks/useUser.tsx";
import { SortBy } from "../../types/sortBy.type.ts";
import { useQuery } from "@tanstack/react-query";
import { QUERY_KEY } from "../../config/queryClientKeys.ts";
import { loaderTransactions } from "../transactions/loader.ts";
import LoadingUi from "../../components/spinner/LoadingUi.tsx";
import { useBoundStore } from "../../store/store.tsx";
// import DateFilter from "../../components/dateRangePicker/DateFilter.tsx";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);
const DateFilter = lazy(() => import("../../components/dateRangePicker/DateFilter.tsx"));

const Div = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;

`


export default function Dashboard() {
  const { user } = useUser();
  if (!user)
    return null;
  const { id: userId } = user;

  const [from, to] = useBoundStore(state => state.range);
  const sortBy: SortBy = { field: 'completed_at', direction: 'asc' };

  const { data: transactions, isLoading } = useQuery(
    {
      queryKey: [userId, QUERY_KEY.TRANSACTIONS, from, to, sortBy],
      queryFn: () => loaderTransactions(userId, null, sortBy, from, to)
    });

  console.log(transactions);
  return (
    <DashboardSection>
      <Div>
        <Text>Date range:</Text>
        <DateFilter />
      </Div>

      {isLoading ? <LoadingUi /> : ""}

      <AnalyticsList />
    </DashboardSection>
  )
}
