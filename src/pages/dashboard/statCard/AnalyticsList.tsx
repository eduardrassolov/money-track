import useDashboard from '../useDashboard';
import createDiagramData from '../createDiagramData';
import { ISummary, getDataSummmary } from '../../../utils/helpers/getStats';
import Diagram from '../diagram/Diagram';

import calculateStats from '../../../utils/helpers/calculateStats';
import LoadingUi from '../../../components/spinner/LoadingUi';
import { useUser } from '../../../utils/hooks/useUser';
import convertToOneCurrency from '../../../services/createData';
import useCurrency from '../../../utils/hooks/useCurrency';
import styled from 'styled-components';
import StatsCardList from './StatsCardList';
import PieDiagram from '../pie/PieDiagram';

const StyledStatsContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`

export const slideUp = {
    hidden: { y: 100 },
    visible: { y: 0 }
}
export const slideDown = {
    hidden: { y: -30 },
    visible: { y: 0 }
}

export default function AnalyticsList() {
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

    const summaryExpenses: Array<ISummary> = getDataSummmary(convertedExpenses);
    const summaryIncomes: Array<ISummary> = getDataSummmary(convertedIncomes);

    return <>
        {isTransactionLoading || isExpenseLoading || isIncomeLoading ?
            <center>
                <LoadingUi />
            </center>
            :

            <StyledStatsContainer>
                <StatsCardList statsData={stats} />

                <Diagram label={"Diagram:"} data={dataDiagram} />

                <PieDiagram label={"Expenses by categories:"} data={summaryExpenses} />

                <PieDiagram label={"Incomes by categories:"} data={summaryIncomes} />
            </StyledStatsContainer >
        }
    </>
}