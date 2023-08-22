import { useLoaderData } from "react-router"
import { styled } from "styled-components";
import StatCard from "./StatCard";
import { HiOutlineShoppingBag, HiOutlineCash, HiOutlineCalculator } from "react-icons/hi";
import { StatsCardData } from "../../types/statsCardData";


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

const ChartContainer = styled.div`
  width: 100%;
  border: 1px solid #ccc;
  padding: 0.5rem 1.5rem;
  border-radius: 7px;
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
  console.log(data);

  return (
    <StyledContainer>
      <h1>Dashboard</h1>

      <RowContainer>
        {statCardData.map((item) => <StatCard key={item.name} item={item} value={"$ 1 000.00"} />)}
      </RowContainer>

      <RowContainer>
        <ChartContainer>c</ChartContainer>
      </RowContainer>

    </StyledContainer>
  )
}
