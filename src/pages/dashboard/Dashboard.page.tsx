import { useLoaderData } from "react-router"
import { styled } from "styled-components";
import StatCard from "./StatCard";
import { HiOutlineShoppingBag, HiOutlineCash, HiOutlineCalculator } from "react-icons/hi";
import { StatsCardData } from "../../types/statsCardData";
import { ITransaction } from "../../interface/ITransactions.ts";
import formatNumberWithSpaces from "../../helpers/formatWithSpace.ts";
import Diagram from "./Diagram.tsx";
import TYPES_TRANSACTION from "../../config/typeTransactions.ts";



const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: max(90%, 500px);

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

// TODO - refactor component Dashboard. Remove caclulation from component
export default function Dashboard() {
  const data = useLoaderData();

  if (!data) {
    return <div>loading...</div>;
  }

  const transactions = data as Array<ITransaction>;
  const expenses: Array<ITransaction> = transactions.filter((item) => item.typeTransaction?.id === TYPES_TRANSACTION.EXPENSE);
  const incomes: Array<ITransaction> = transactions.filter((item) => item.typeTransaction?.id === TYPES_TRANSACTION.INCOME);

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
        <Diagram data={[...transactions]} />
      </RowContainer>

    </StyledContainer >
  )
}
