import { RouteObject, createBrowserRouter, redirect } from "react-router-dom";
import AppLayout from "./layout/AppLayout.tsx";
import Incomes from "./pages/income/Incomes.tsx";
import Expenses from "./pages/expenses/Expenses.tsx";
import Dashboard from "./pages/dashboard/Dashboard.tsx";
import { loaderExpenses } from "./pages/expenses/loader.ts";
import { loaderIncomes } from "./pages/income/loader.ts";
import { loaderTransactions } from "./components/transactionCard/loader.ts";
import TransactionsList from "./components/transactionCard/TransactionsList.tsx";
import actionIncomes from "./pages/income/action.ts";
import actionExpenses from "./pages/expenses/action.ts";


export const ROUTES = {
    ROOT: "/app",
    TRANSACTIONS: `/app/transactions`,
    INCOMES: "/app/incomes",
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
                path: ROUTES.INCOMES,
                element: <Incomes />,
                loader: async () => loaderIncomes(),
                action: async ({ request }) => actionIncomes(request),
            },
            {
                path: ROUTES.EXPENSES,
                element: <Expenses />,
                loader: async () => loaderExpenses(),
                action: async ({ request }) => actionExpenses(request)
            },
            {
                path: ROUTES.DASHBOARD,
                element: <Dashboard />,
                loader: async () => loaderTransactions(),
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