import { useLoaderData } from "react-router"
import { styled } from "styled-components";
import StatCard from "./StatCard";
import { HiOutlineShoppingBag, HiOutlineCash, HiOutlineCalculator } from "react-icons/hi";
import { StatsCardData } from "../../types/statsCardData";
import IDashboardData from '../../interface/IDashboardData.ts';
import { ITransaction } from "../../interface/ITransactions.ts";
import formatNumberWithSpaces from "../../helpers/formatWithSpace.ts";
import Diagram from "./Diagram.tsx";



const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 650px;
`

const RowContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 0 1rem;
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
    name: "Coefficent",
    icon: <HiOutlineCalculator />,
    iconBg: "rgba(200, 105, 250, 0.3)",
    borderColor: "rgb(200, 105, 250)",
  }
]

export default function Dashboard() {
  const data = useLoaderData();

  if (!data?.expenses || !data?.incomes) return <div>loading...</div>;

  const { expenses, incomes } = data as IDashboardData;
  const totalExpenses: number = expenses.reduce((acc: number, item: ITransaction) => acc + item.amount, 0);
  const totalIncomes: number = incomes.reduce((acc: number, item: ITransaction) => acc + item.amount, 0);
  const coefficent: string = `${(totalExpenses / totalIncomes) * 100} % `;

  const values = [`$ ${formatNumberWithSpaces(totalExpenses)}`, `$ ${formatNumberWithSpaces(totalIncomes)}`, coefficent];

  return (
    <StyledContainer>
      <h1>Dashboard</h1>

      <RowContainer>
        {statCardData.map((item, index) => <StatCard key={item.name} item={item} value={values[index]} />)}
      </RowContainer>

      <RowContainer>
        <Diagram data={[...incomes, ...expenses]} />
      </RowContainer>

    </StyledContainer >
  )
}
