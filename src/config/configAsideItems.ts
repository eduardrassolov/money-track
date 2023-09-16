// export const asideItemsName: Array<string> = ["Dashboard", "Expenses", "Incomes?page=1", "Transactions", "Settings"];
export interface IAsideItem {
  name: string;
  path: string;
}

export const asideItemsName: Array<IAsideItem> = [
  {
    name: "Dashboard",
    path: "/app/dashboard",
  },
  {
    name: "Expenses",
    path: "/app/expenses?page=1",
  },
  {
    name: "Incomes",
    path: "/app/incomes?page=1",
  },
  {
    name: "Transactions",
    path: "/app/transactions?page=1",
  },
  {
    name: "Settings",
    path: "/app/settings",
  },
];
