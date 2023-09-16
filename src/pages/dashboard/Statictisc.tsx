import { PieBlock, PieContainer, RowContainer, RowContainerCards } from './Dashboard.page.style'
import { STATS_CARD_DATA } from '../../config/statsCardsData'
import StatCard from './statCard/StatCard'
import useDefaultCurrency from '../../utils/hooks/useDefaultCurrency'
import useDashboard from './useDashboard'
import createDiagramData from './createDiagramData'
import { ISummary, getSummaryData } from '../../utils/helpers/getStats'
import Diagram from './Diagram'
import Header from '../../ui/header/Header'
import CategoryChart from './categoryChart/CategoryChart'
import calculateStats from '../../utils/helpers/calculateStats'

export default function Statictisc() {
    const { transactions, expenses, incomes } = useDashboard();

    if (!transactions || !incomes || !expenses)
        return null;

    const stats = calculateStats({ expenses, incomes });

    const dataDiagram = createDiagramData(transactions);
    const summaryExpenses: Array<ISummary> = getSummaryData(expenses);
    const summaryIncomes: Array<ISummary> = getSummaryData(incomes);

    return <>
        <RowContainerCards>
            {STATS_CARD_DATA.map((item, index) => <StatCard key={item.name} item={item} value={stats[index]} />)}
        </RowContainerCards>

        {dataDiagram.length ?
            <RowContainer>
                <Diagram data={dataDiagram} />
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
    </>
}
