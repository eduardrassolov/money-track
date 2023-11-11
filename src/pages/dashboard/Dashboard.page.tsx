import { lazy } from "react";
import { DashboardSection } from "./Dashboard.page.style.ts";
import styled from "styled-components";
import { Text } from "../../components/transactionView/TransactionView.tsx";
import { useUser } from "../../utils/hooks/useUser.tsx";
import { SortBy } from "../../types/sortBy.type.ts";
import { useQuery } from "@tanstack/react-query";
import { QUERY_KEY } from "../../config/queryClientKeys.ts";
import { loaderTransactions } from "../transactions/loader.ts";
import LoadingUi from "../../components/spinner/LoadingUi.tsx";
import { useBoundStore } from "../../store/store.tsx";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import AreaChart from "./AreaChart.tsx";
import AnalyticsList from "./statCard/AnalyticsList.tsx";
import { DoughnutChart } from "../../components/doughnut/DoughnutChart.tsx";
import Diagram from "./diagram/Diagram.tsx";
import useCurrency from "../../utils/hooks/useCurrency.tsx";
import convertToOneCurrency from "../../services/createData.ts";
import { ISummary, getDataSummmary } from "../../utils/helpers/getStats.ts";
import calculateStats from "../../utils/helpers/calculateStats.ts";
import createDiagramData from "./createDiagramData.ts";

ChartJS.register(ArcElement, Tooltip, Legend);
const DateFilter = lazy(() => import("../../components/dateRangePicker/DateFilter.tsx"));

const Div = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
`

const StyledDiv = styled.div`
  display: flex;
  gap: 1rem;
  border: 1px solid white;
  justify-content: center;
  height: 500px;
`

const DonutDiv = styled.div`
  height: 500px;
`

export default function Dashboard() {
  const { user, currency } = useUser();
  if (!user)
    return null;
  const { id: userId } = user;
  const { defaultCurrency } = useCurrency(currency);

  const [from, to] = useBoundStore(state => state.range);
  const sortBy: SortBy = { field: 'completed_at', direction: 'asc' };

  const { data: transactions } = useQuery(
    {
      queryKey: [userId, QUERY_KEY.TRANSACTIONS, from, to, sortBy],
      queryFn: () => loaderTransactions(userId, null, sortBy, from, to)
    });
  const { data: expenses } = useQuery(
    {
      queryKey: [userId, QUERY_KEY.EXPENSES, from, to, sortBy],
      queryFn: () => loaderTransactions(userId, null, sortBy, from, to)
    });
  const { data: incomes } = useQuery(
    {
      queryKey: [userId, QUERY_KEY.INCOMES, from, to, sortBy],
      queryFn: () => loaderTransactions(userId, null, sortBy, from, to)
    });

  if (!defaultCurrency || !expenses || !incomes || !transactions)
    return null;

  const convertedExpenses = convertToOneCurrency(expenses, defaultCurrency);
  const convertedIncomes = convertToOneCurrency(incomes, defaultCurrency);
  const convertedTransactions = convertToOneCurrency(transactions, defaultCurrency);

  const stats = calculateStats(convertedExpenses, convertedIncomes);

  const dataDiagram = createDiagramData(convertedTransactions);

  const summaryExpenses: Array<ISummary> = getDataSummmary(convertedExpenses);
  const summaryIncomes: Array<ISummary> = getDataSummmary(convertedIncomes);



  return (
    <DashboardSection>
      {/* <Div>
        <Text>Date range:</Text>
        <DateFilter />
      </Div> */}

      {/* <AnalyticsList /> */}

      {transactions && expenses && incomes ? <Diagram label={"Diagram:"} data={dataDiagram} currency={defaultCurrency} /> : ""}




    </DashboardSection>
  )
}
