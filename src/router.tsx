import { RouteObject, createBrowserRouter } from "react-router-dom";
import AppLayout from "./pages/layout/AppLayout.tsx";
import Incomes from "./pages/income/Incomes.page.tsx";
import Expenses from "./pages/expenses/Expenses.page.tsx";
import Dashboard from "./pages/dashboard/Dashboard.page.tsx";
import Transactions from "./pages/transactions/Transactions.page.tsx";
import HomePage from "./pages/home/HomePage.tsx";
import ErrorELement from "./components/error/ErrorELement.tsx";
import ProtectedLayout from "./pages/layout/ProtectedLayout.tsx";
import Page404 from "./pages/errors/Page404.tsx";
import SignUp from "./pages/signUp/SignUp.page.tsx";
import Login from "./pages/login/login.page.tsx";
import EditPage from "./pages/edit/EditPage.tsx";
import loaderTransactionById from "./pages/edit/loader.ts";
import Settings from "./pages/settings/Settings.page.tsx";

export const ROUTES = {
    HOME: "/",
    LOGIN: "/login",
    SIGN_UP: "/sign-up",

    ROOT: "/app",
    TRANSACTIONS: `/app/transactions`,
    TRANSACTION_ID: "/app/transactions/:id",
    INCOMES: "/app/incomes",
    INCOME_ID: "/app/incomes/:id",
    EXPENSES: "/app/expenses",
    EXPENSE_ID: "/app/expenses/:id",
    DASHBOARD: "/app/dashboard",
    SETTINGS: "/app/settings"
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
        path: ROUTES.SIGN_UP,
        element: <SignUp />
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
                path: ROUTES.TRANSACTION_ID,
                element: <EditPage />,
                loader: async ({ params: { id } }) => loaderTransactionById(id)
            },
            {
                path: ROUTES.INCOMES,
                element: <Incomes />,
            },
            {
                path: ROUTES.INCOME_ID,
                element: <EditPage />,
                loader: async ({ params: { id } }) => loaderTransactionById(id)
            },
            {
                path: ROUTES.EXPENSES,
                element: <Expenses />,
            },
            {
                path: ROUTES.EXPENSE_ID,
                element: <EditPage />,
                loader: async ({ params: { id } }) => loaderTransactionById(id)
            },
            {
                path: ROUTES.DASHBOARD,
                element: <Dashboard />,
            },
            {
                path: ROUTES.SETTINGS,
                element: <Settings />
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