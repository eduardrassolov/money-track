import StatCard from "./statCard/StatCard.tsx";
import { HiOutlineShoppingBag, HiOutlineCash, HiOutlineCalculator } from "react-icons/hi";
import { AiOutlineBank } from "react-icons/ai";
import { StatsCardData } from "../../types/statsCardData";
import Diagram from "./Diagram.tsx";
import Header from "../../ui/header/Header.tsx";
import calcStats from "../../utils/helpers/calculateStats.ts";
import CategoryChart from "./categoryChart/CategoryChart.tsx";
import { PieBlock, PieContainer, RowContainer, RowContainerCards, StyledContainer } from "./Dashboard.page.style.ts";
import { ISummary, getSummaryData } from "../../utils/helpers/getStats.ts";
import useDefaultCurrency from "../../utils/hooks/useDefaultCurrency.tsx";
import { formatDateToChart } from "../../utils/helpers/formatDate.ts";
import { ITransaction } from "../../interface/ITransactions.ts";
import useDashboard from "./useDashboard.tsx";

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

function createDataDiagram(transactions: ITransaction[]) {
  const dataDiagram = transactions.reduce((acc, curr) => {

    const { completedAt, type, amount } = curr;
    const dateKey = formatDateToChart(completedAt); // Extract the date part

    if (!acc[dateKey]) {
      acc[dateKey] = { completedAt: dateKey, Expense: 0, Income: 0 };
    }

    if (type.id === 1) {
      acc[dateKey].Expense += amount;
    } else if (type.id === 2) {
      acc[dateKey].Income += amount;
    }

    return acc;

  }, {})
  console.log("all", dataDiagram);
  const ddt = Object.values(dataDiagram)
  return ddt;
}


// TODO - refactor component Dashboard. Remove caclulation from component
export default function Dashboard() {
  const { defaultCurrency } = useDefaultCurrency();
  const { transactions, expenses, incomes } = useDashboard();

  if (!transactions || !incomes || !expenses)
    return null;

  const stats = calcStats({ expenses, incomes, defaultCurrency: defaultCurrency || "$" });

  const dataDiagram = createDataDiagram(transactions);

  const summaryExpenses: Array<ISummary> = getSummaryData(expenses);
  const summaryIncomes: Array<ISummary> = getSummaryData(incomes);

  return (
    <>
      <StyledContainer>
        <Header text="Dashboard" />

        <RowContainerCards>
          {statCardData.map((item, index) => <StatCard key={item.name} item={item} value={stats[index]} />)}
        </RowContainerCards>

        {dataDiagram.length ?
          <RowContainer>
            <Diagram data={[...dataDiagram]} />
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
