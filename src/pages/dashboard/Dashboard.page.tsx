import { useLoaderData } from "react-router"
import { styled } from "styled-components";
import StatCard from "./StatCard";
import { HiOutlineShoppingBag, HiOutlineCash, HiOutlineCalculator } from "react-icons/hi";
import { AiOutlineBank } from "react-icons/ai";

import { StatsCardData } from "../../types/statsCardData";
import { ITransaction } from "../../interface/ITransactions.ts";
import formatNumberWithSpaces from "../../helpers/formatWithSpace.ts";
import Diagram from "./Diagram.tsx";
import TYPES_TRANSACTION from "../../config/typeTransactions.ts";
import Header from "../../ui/header/Header.tsx";
import { useQuery } from "@tanstack/react-query";
import { QUERY_KEY } from "../../config/queryClientKeys.ts";
import { loaderExpenses } from "../expenses/loader.ts";
import { loaderIncomes } from "../income/loader.ts";
import { loaderTransactions } from "../transactions/loader.ts";
import calcStats from "../../helpers/calculateStats.ts";
import Filter from "../../components/filter/Filter.tsx";
import { FILTER_KEYS } from "../../components/filter/filterParameters.ts";
import { useSearchParams } from "react-router-dom";
import { SortBy } from "../transactions/TransactionArr.tsx";

import { devices } from "../../styles/breakPoints.ts";

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: clamp(310px, 800px, 95%);
`

const RowContainer = styled.div`
  display: flex;
  justify-content: space-between; 
  margin: 0 0 1rem;

  @media (max-width: 670px) {
    margin: 0 0 0.5rem;
  }
`

const RowContainerCards = styled(RowContainer)`
  gap: 1rem;
  flex-wrap: wrap;
  @media only screen and  ${devices.md} {
    justify-content: start;
    gap: 0.5rem;
  }
`


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
  const [params] = useSearchParams();

  const filterValue = params.get(FILTER_KEYS.DATE);
  const filter = !filterValue ? null : filterValue;
  const sortBy: SortBy = { field: 'completed_at', direction: 'asc' };

  const { data: transactions } = useQuery({ queryKey: [QUERY_KEY.TRANSACTIONS, filter, sortBy], queryFn: () => loaderTransactions({ filter, sortBy }) });
  const { data: expenses } = useQuery({ queryKey: [QUERY_KEY.EXPENSES, filter, sortBy], queryFn: () => loaderExpenses({ filter, sortBy }) });
  const { data: incomes } = useQuery({ queryKey: [QUERY_KEY.INCOMES, filter, sortBy], queryFn: () => loaderIncomes({ filter, sortBy }) });
  // TODO - change to default params

  if (!transactions || !incomes || !expenses)
    return null;

  const stats = calcStats({ expenses, incomes });

  return (
    <>

      <StyledContainer>
        <Header text="Dashboard" />

        <RowContainerCards>
          {statCardData.map((item, index) => <StatCard key={item.name} item={item} value={stats[index]} />)}
        </RowContainerCards>

        <RowContainer>
          <Diagram data={[...transactions]} />
        </RowContainer>

      </StyledContainer >
    </>
  )
}
