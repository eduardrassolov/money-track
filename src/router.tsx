import { RouteObject, createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/home/HomePage.tsx";
import ErrorELement from "./components/error/ErrorELement.tsx";
import ProtectedLayout from "./pages/layout/ProtectedLayout.tsx";
import Page404 from "./pages/errors/Page404.tsx";
import EditPage from "./pages/edit/EditPage.tsx";
import loaderTransactionById from "./pages/edit/loader.ts";
import Settings from "./pages/settings/Settings.page.tsx";
import {Suspense, lazy} from "react";
import LoadingUi from "./components/spinner/LoadingUi.tsx";
import LoginPage from "./pages/login/login.page.tsx";

const SingUpPage = lazy(() => import("./pages/signUp/SignUp.page.tsx"));
const AppLayout = lazy(() => import("./pages/layout/AppLayout.tsx"));
const Transactions = lazy(() => import("./pages/transactions/Transactions.page.tsx"));
const Dashboard = lazy(() => import("./pages/dashboard/Dashboard.page.tsx"));
const Incomes = lazy(() => import("./pages/income/Incomes.page.tsx"));
const Expenses = lazy(() => import("./pages/expenses/Expenses.page.tsx"));

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
        element: <LoginPage />
    },
    {
        path: ROUTES.SIGN_UP,
        element: <Suspense fallback={<LoadingUi size={"lg"}/>}><SingUpPage /></Suspense>
    
    },
    {
        path: ROUTES.ROOT,
        element: <ProtectedLayout> <AppLayout /> </ProtectedLayout>,
        errorElement: <ErrorELement />,
        children: [
            {
                path: ROUTES.TRANSACTIONS,
                element: <Suspense fallback={<LoadingUi/>}><Transactions /></Suspense>,

            },
            {
                path: ROUTES.TRANSACTION_ID,
                element: <Suspense fallback={<LoadingUi/>}><EditPage /></Suspense>,
                loader: async ({ params: { id } }) => loaderTransactionById(id)
            },
            {
                path: ROUTES.INCOMES,
                element: <Suspense fallback={<LoadingUi/>}><Incomes /></Suspense>
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
                element: <Suspense fallback={<LoadingUi/>}><Dashboard /></Suspense>
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