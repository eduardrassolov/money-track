import { StatsCardData } from "../types/statsCardData";
import { HiOutlineShoppingBag, HiOutlineCash, HiOutlineCalculator } from "react-icons/hi";
import { AiOutlineBank } from "react-icons/ai";

export const STATS_CARD_DATA: Array<StatsCardData> = [
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