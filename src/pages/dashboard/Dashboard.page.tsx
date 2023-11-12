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
import DateFilter from "../../components/filterDate/DateFilter.tsx";



const Div = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  width: 100%;

  h1{
    font-size: 1.2rem;
    font-weight: 500;
    color: ${props => props.theme.text}
  }
`

const StyledDiv = styled.div`
  display: flex;
  gap: 1rem;
  border: 1px solid white;
  justify-content: center;
  height: 500px;
`

const Container = styled.div`
  background: ${props => props.theme.background};
  max-width: 1200px;
  border-radius: 15px;
  border: 1px solid ${props => props.theme.border};
  display: flex;
  flex-direction: column;
  align-items: center;
`

const DateFilterContainer = styled.div`
  margin: 0 2rem 0 auto;
`

const Main = styled.main`
  background: white;
`

const sortBy: SortBy = { field: 'completed_at', direction: 'asc' };

export default function Dashboard() {
  const { user, currency } = useUser();
  if (!user)
    return;
  console.log(user);

  const { defaultCurrency } = useCurrency(currency);
  const [from, to] = useBoundStore(state => state.range);


  const { data: transactions, isLoading } = useQuery(
    {
      queryKey: [user?.id, QUERY_KEY.TRANSACTIONS, from, to, sortBy],
      queryFn: () => loaderTransactions(user?.id, null, sortBy, from, to)
    });

  if (!defaultCurrency)
    return;


  return (
    <Main>
      <Container>
        <Div>
          <h1>Diagram</h1>
          <DateFilterContainer>
            <DateFilter />
          </DateFilterContainer>
        </Div>

        <Diagram transactions={transactions} currency={defaultCurrency} isLoading={isLoading} />
      </Container>
    </Main>
  )
}
