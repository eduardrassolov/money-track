import { ROUTES } from "./routes";

export interface IAsideItem {
    name: string;
    path: string;
}

const defaultPage: string = "page=1";

export const asideMenuList: Array<IAsideItem> = [
    {
        name: "Dashboard",
        path: ROUTES.DASHBOARD,
    },
    {
        name: "Expenses",
        path: `${ROUTES.EXPENSES}?${defaultPage}`,
    },
    {
        name: "Incomes",
        path: `${ROUTES.INCOMES}?${defaultPage}`,
    },
    // {
    //   name: "Transactions",
    //   path: `${ROUTES.TRANSACTIONS}?${defaultPage}`,
    // },
];
