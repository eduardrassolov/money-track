import { useLoaderData } from "react-router"
import { styled } from "styled-components";
import StatCard from "./StatCard";
import { HiOutlineShoppingBag, HiOutlineCash, HiOutlineCalculator } from "react-icons/hi";
import { AiOutlineBank } from "react-icons/ai";

import { StatsCardData } from "../../types/statsCardData";
import Diagram from "./Diagram.tsx";

import Header from "../../ui/header/Header.tsx";
import { useQuery } from "@tanstack/react-query";
import { QUERY_KEY } from "../../config/queryClientKeys.ts";
import { loaderExpenses } from "../expenses/loader.ts";
import { loaderIncomes } from "../income/loader.ts";
import { loaderTransactions } from "../transactions/loader.ts";
import calcStats from "../../helpers/calculateStats.ts";
import { FILTER_KEYS } from "../../components/filter/filterParameters.ts";
import { useSearchParams } from "react-router-dom";
import { SortBy } from "../transactions/TransactionList.tsx";

import { devices } from "../../styles/breakPoints.ts";
import CategoryChart from "./CategoryChart.tsx";
import HeaderSection from "../home/HeaderSection.tsx";

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: clamp(310px, 1000px, 95%);
  
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

  @media only screen and ${devices.sm} {
    justify-content: start;
    align-items: flex-start;
  }

  @media only screen and ${devices.md}{
    justify-content: space-between;
  }
`


const PieBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
 
  @media only screen and ${devices.md}{
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
  }
`
const PieContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem 1rem;
  margin: 0 0 1rem;
  background: #fff;
  border-radius: 15px;

  @media only screen and ${devices.md}{
    flex: 2;
    flex-wrap: wrap;
    min-width: 400px;
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
export default function Dashboard({ total }) {
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

  const summaryData = expenses.reduce((acc, cur) => {
    if (!acc[cur.category.name]) {
      acc[cur.category.name] = cur.amount;
    }
    else {
      acc[cur.category.name] += cur.amount;
    }
    return acc;
  }, {});

  // const colors = ["red", "green", "purple", "orange", "gray"];
  const ttlExp = expenses.reduce((acc, cur) => acc + cur.amount, 0);

  const summary = Object.entries(summaryData).map(([name, value]) => {
    return {
      name: name,
      value: value,
      percentage: Math.round(value * 100 / ttlExp),
    }
  })

  const summaryData2 = incomes.reduce((acc, cur) => {
    if (!acc[cur.category.name]) {
      acc[cur.category.name] = cur.amount;
    }
    else {
      acc[cur.category.name] += cur.amount;
    }
    return acc;
  }, {});



  const ttlExp2 = incomes.reduce((acc, cur) => acc + cur.amount, 0);
  const summar2 = Object.entries(summaryData2).map(([name, value]) => {
    return {
      name: name,
      value: value,
      percentage: Math.round(value * 100 / ttlExp2),
    }
  })


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

        <PieBlock>
          <PieContainer>
            <Header text="Expenses by categories" />
            <CategoryChart data={summary} />
          </PieContainer>
          <PieContainer>
            <Header text="Incomes by categories" />
            <CategoryChart data={summar2} />
          </PieContainer>
        </PieBlock>
        {/* </PieContainer> */}

      </StyledContainer >
    </>
  )
}
