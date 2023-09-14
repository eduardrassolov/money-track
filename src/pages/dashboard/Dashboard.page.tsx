import StatCard from "./statCard/StatCard.tsx";
import Diagram from "./Diagram.tsx";
import Header from "../../ui/header/Header.tsx";
import calcStats from "../../utils/helpers/calculateStats.ts";
import CategoryChart from "./categoryChart/CategoryChart.tsx";
import { PieBlock, PieContainer, RowContainer, RowContainerCards, StyledContainer } from "./Dashboard.page.style.ts";
import { ISummary, getSummaryData } from "../../utils/helpers/getStats.ts";
import useDefaultCurrency from "../../utils/hooks/useDefaultCurrency.tsx";
import useDashboard from "./useDashboard.tsx";
import createDiagramData from "./createDiagramData.ts";
import { STATS_CARD_DATA } from "../../config/statsCardsData.tsx";
import Filter from "../../components/operations/filter/Filter.js";
import { FILTER_DASHBOARD, FILTER_KEYS } from "../../components/operations/filter/filterParameters.js";

// TODO - refactor component Dashboard. Remove caclulation from component
export default function Dashboard() {
  const { defaultCurrency } = useDefaultCurrency();
  const { transactions, expenses, incomes } = useDashboard();

  if (!transactions || !incomes || !expenses)
    return null;

  const stats = calcStats({ expenses, incomes, defaultCurrency: defaultCurrency || "$" });

  const dataDiagram = createDiagramData(transactions);

  const summaryExpenses: Array<ISummary> = getSummaryData(expenses);
  const summaryIncomes: Array<ISummary> = getSummaryData(incomes);

  return (
    <>
      <StyledContainer>
        <Filter options={FILTER_DASHBOARD} filterKey={FILTER_KEYS.DATE} />

        <RowContainerCards>
          {STATS_CARD_DATA.map((item, index) => <StatCard key={item.name} item={item} value={stats[index]} />)}
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
