import { RouteObject, createBrowserRouter } from "react-router-dom";
import AppLayout from "./layout/AppLayout.tsx";
import TransactionsList from "./pages/transactions/TransactionsList.tsx";
import Incomes from "./pages/income/Incomes.tsx";
import Expenses from "./pages/expenses/Expenses.tsx";
import Dashboard from "./pages/dashboard/Dashboard.tsx";

import { loaderTransactions } from "./pages/transactions/loader.ts";
import { loaderExpenses } from "./pages/expenses/loader.ts";
import { loaderIncomes } from "./pages/income/loader.ts";


export const ROUTES = {
    ROOT: "/app",
    TRANSACTIONS: `/app/transactions`,
    INCOME: "/app/income",
    EXPENSES: "/app/expenses",
    DASHBOARD: "/app/dashboard",
}

const routes: RouteObject[] = [
    {
        path: ROUTES.ROOT,
        element: <AppLayout />,
        errorElement: <div>error</div>,
        children: [
            {
                path: ROUTES.TRANSACTIONS,
                element: <TransactionsList />,
                loader: async () => loaderTransactions(),
            },
            {
                path: ROUTES.INCOME,
                element: <Incomes />,
                loader: async () => loaderIncomes(),
            },
            {
                path: ROUTES.EXPENSES,
                element: <Expenses />,
                loader: async () => loaderExpenses(),
            },
            {
                path: ROUTES.DASHBOARD,
                element: <Dashboard />
            }
        ]
    },
    {
        path: "*",
        element: <div>404</div>
    }
]

const router = createBrowserRouter(routes);
export default router;