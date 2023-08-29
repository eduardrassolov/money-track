import { RouteObject, createBrowserRouter, redirect } from "react-router-dom";
import AppLayout from "./layout/AppLayout.tsx";
import Incomes from "./pages/income/Incomes.page.tsx";
import Expenses from "./pages/expenses/Expenses.page.tsx";
import Dashboard from "./pages/dashboard/Dashboard.page.tsx";

import Transactions from "./pages/transactions/Transactions.page.tsx";
import { loaderDashboard } from "./pages/dashboard/loader.ts";
import HomePage from "./pages/home/HomePage.tsx";
import loadData from "./layout/loader.ts";
import ErrorELement from "./components/error/ErrorELement.tsx";

export const ROUTES = {
    HOME: "/",
    ROOT: "/app",
    TRANSACTIONS: `/app/transactions`,
    INCOMES: "/app/incomes",
    EXPENSES: "/app/expenses",
    DASHBOARD: "/app/dashboard",
}

const routes: RouteObject[] = [
    {
        path: ROUTES.HOME,
        element: <HomePage />,
    },
    {
        path: ROUTES.ROOT,
        element: <AppLayout />,
        loader: loadData,
        errorElement: <ErrorELement />,
        children: [
            {
                path: ROUTES.TRANSACTIONS,
                element: <Transactions />,
            },
            {
                path: ROUTES.INCOMES,
                element: <Incomes />,
            },
            {
                path: ROUTES.EXPENSES,
                element: <Expenses />,
            },
            {
                path: ROUTES.DASHBOARD,
                element: <Dashboard />,
                loader: loaderDashboard,
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