import { RouteObject, createBrowserRouter } from "react-router-dom";
import AppLayout from "./pages/layout/AppLayout.tsx";
import Incomes from "./pages/income/Incomes.page.tsx";
import Expenses from "./pages/expenses/Expenses.page.tsx";
import Dashboard from "./pages/dashboard/Dashboard.page.tsx";

import Transactions from "./pages/transactions/Transactions.page.tsx";
import HomePage from "./pages/home/HomePage.tsx";
import ErrorELement from "./components/error/ErrorELement.tsx";
import Login from "./pages/login/Login.page.tsx";
import ProtectedLayout from "./pages/layout/ProtectedLayout.tsx";
import Page404 from "./pages/errors/Page404.tsx";

export const ROUTES = {
    HOME: "/",
    LOGIN: "/login",

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
        path: ROUTES.LOGIN,
        element: <Login />,
    },
    {
        path: ROUTES.ROOT,
        element: <ProtectedLayout> <AppLayout /> </ProtectedLayout>,
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
            }
        ]
    },
    {
        path: "*",
        element: <Page404 />
    }
]

const router = createBrowserRouter(routes);
export default router;