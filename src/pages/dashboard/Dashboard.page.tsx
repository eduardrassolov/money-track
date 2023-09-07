import StatCard from "./statCard/StatCard.tsx";
import { HiOutlineShoppingBag, HiOutlineCash, HiOutlineCalculator } from "react-icons/hi";
import { AiOutlineBank } from "react-icons/ai";
import { StatsCardData } from "../../types/statsCardData";
import Diagram from "./Diagram.tsx";
import Header from "../../ui/header/Header.tsx";
import { useQuery } from "@tanstack/react-query";
import { QUERY_KEY } from "../../config/queryClientKeys.ts";
import { loaderExpenses } from "../expenses/loader.ts";
import { loaderIncomes } from "../income/loader.ts";
import { defaultSort, loaderTransactions } from "../transactions/loader.ts";
import calcStats from "../../utils/helpers/calculateStats.ts";
import CategoryChart from "./categoryChart/CategoryChart.tsx";
import { SortBy } from "../../types/sortBy.type.ts";
import { PieBlock, PieContainer, RowContainer, RowContainerCards, StyledContainer } from "./Dashboard.page.style.ts";
import { ISummary, getSummaryData } from "../../utils/helpers/getStats.ts";
import useFilter from "../../utils/hooks/useFilter.tsx";
import { useUser } from "../../utils/hooks/useUser.tsx";

const statCardData: Array<StatsCardData> = [
  {
    name: "Expenses",
    icon: <HiOutlineShoppingBag />,
    iconBg: "rgba(36, 143, 233, 0.3)",
    borderColor: "rgb(36, 143, 233)",
  },
  {
    name: "Incomes",
    icon: <HiOutlineCash />,
    iconBg: "rgba(142, 230, 20, 0.3)",
    borderColor: "rgb(142, 230, 20)",
  },
  {
    name: "Balance",
    icon: <AiOutlineBank />,
    iconBg: "rgba(255, 216, 6, 0.3)",
    borderColor: "rgb(255, 216, 6)",
  },
  {
    name: "Coefficent",
    icon: <HiOutlineCalculator />,
    iconBg: "rgba(200, 105, 250, 0.3)",
    borderColor: "rgb(200, 105, 250)",
  }
]

// TODO - refactor component Dashboard. Remove caclulation from component
export default function Dashboard() {
  const { filter } = useFilter();
  const { user } = useUser();

  if (!user) {
    return;
  }
  const userId = user.id;
  const sortBy: SortBy = { field: 'completed_at', direction: 'asc' };

  const { data: transactions } = useQuery({ queryKey: [userId, QUERY_KEY.TRANSACTIONS, filter, sortBy], queryFn: () => loaderTransactions(userId, filter, sortBy) });
  const { data: expenses } = useQuery({ queryKey: [userId, QUERY_KEY.EXPENSES, filter, sortBy], queryFn: () => loaderExpenses(userId, filter, sortBy) });
  const { data: incomes } = useQuery({ queryKey: [userId, QUERY_KEY.INCOMES, filter, sortBy], queryFn: () => loaderIncomes(userId, filter, sortBy) });

  if (!transactions || !incomes || !expenses)
    return null;

  const stats = calcStats({ expenses, incomes });

  const summaryExpenses: Array<ISummary> = getSummaryData(expenses);
  const summaryIncomes: Array<ISummary> = getSummaryData(incomes);

  return (
    <>
      <StyledContainer>
        <Header text="Dashboard" />

        <RowContainerCards>
          {statCardData.map((item, index) => <StatCard key={item.name} item={item} value={stats[index]} />)}
        </RowContainerCards>

        {transactions.length ?
          <RowContainer>
            <Diagram data={[...transactions]} />
          </RowContainer>
          : ''}


        <PieBlock>
          {expenses.length ?
            <PieContainer>
              <Header text="Expenses by categories" />
              <CategoryChart data={summaryExpenses} />
            </PieContainer>
            : ''}
          {incomes.length ?
            <PieContainer>
              <Header text="Incomes by categories" />
              <CategoryChart data={summaryIncomes} />
            </PieContainer>
            : ''}

        </PieBlock>
      </StyledContainer >
    </>
  )
}
