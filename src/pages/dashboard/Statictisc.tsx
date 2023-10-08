import { PieBlock, PieContainer, RowContainer, RowContainerCards } from './Dashboard.page.style'
import { STATS_CARD_DATA } from '../../config/statsCardsData'
import StatCard from './statCard/StatCard'
import useDashboard from './useDashboard'
import createDiagramData from './createDiagramData'
import { ISummary, getSummaryData } from '../../utils/helpers/getStats'
import Diagram from './diagram/Diagram'
import Header from '../../ui/header/Header'
import CategoryChart from './categoryChart/CategoryChart'
import calculateStats from '../../utils/helpers/calculateStats'
import LoadingUi from '../../components/spinner/LoadingUi'
import { useUser } from '../../utils/hooks/useUser'
import convertToOneCurrency from '../../services/createData'
import useCurrency from '../../utils/hooks/useCurrency'

export default function Statictisc() {
    const { transactions, expenses, incomes, isExpenseLoading, isIncomeLoading, isTransactionLoading } = useDashboard();

    const { currency } = useUser();
    const { defaultCurrency } = useCurrency(currency);

    if (!defaultCurrency || !expenses || !incomes || !transactions)
        return null;

    const convertedExpenses = convertToOneCurrency(expenses, defaultCurrency);
    const convertedIncomes = convertToOneCurrency(incomes, defaultCurrency);
    const convertedTransactions = convertToOneCurrency(transactions, defaultCurrency);

    const stats = calculateStats(convertedExpenses, convertedIncomes);

    const dataDiagram = createDiagramData(convertedTransactions);
    const summaryExpenses: Array<ISummary> = getSummaryData(convertedExpenses);
    const summaryIncomes: Array<ISummary> = getSummaryData(convertedIncomes);

    return <>
        {isTransactionLoading || isExpenseLoading || isIncomeLoading ?
            <center>
                <LoadingUi />
            </center>
            :
            <>
                <RowContainerCards>
                    {STATS_CARD_DATA.map((item, index) => <StatCard key={item.name} item={item} value={stats[index]} />)}
                </RowContainerCards>

                {dataDiagram.length ?
                    <RowContainer>
                        <Diagram data={dataDiagram} />
                    </RowContainer>
                    : ''}

                {expenses?.length ?
                    <PieContainer>
                        <Header text="Expenses by categories" />
                        <CategoryChart data={summaryExpenses} />
                    </PieContainer>
                    : ''}

                {incomes?.length ?
                    <PieContainer>
                        <Header text="Incomes by categories" />
                        <CategoryChart data={summaryIncomes} />
                    </PieContainer>
                    : ''}
            </>
        }
    </>
}
