import { Suspense, lazy } from "react";
import { RouteObject, createBrowserRouter } from "react-router-dom";

import HomePage from "./pages/home/Home.page.tsx";
import ErrorELement from "./components/error/ErrorELement.tsx";
import ProtectedLayout from "./pages/layout/ProtectedLayout.tsx";
import Page404 from "./pages/errors/Page404.tsx";
import EditPage from "./pages/edit/EditPage.tsx";
import loaderTransactionById from "./pages/edit/loader.ts";
import Settings from "./pages/settings/Settings.page.tsx";
import LoadingUi from "./components/spinner/LoadingUi.tsx";
import AuthorizationLayout from "./pages/authorization/Authorization.tsx";
import LogIn from "./pages/authorization/login/LogIn.tsx";
import SignUp from "./pages/authorization/signUp/SignUp.tsx";
import { ROUTES } from "./config/routes.ts";
// import TransactionView from "./components/transactionView/TransactionView.tsx";
import TYPES_TRANSACTION from "./config/typeTransactions.ts";
import { QUERY_KEY } from "./config/queryClientKeys.ts";
import { loaderExpenses } from "./pages/expenses/loader.ts";
import { loaderIncomes } from "./pages/income/loader.ts";
import { loaderTransactions } from "./pages/transactions/loader.ts";

const AppLayout = lazy(() => import("./pages/layout/AppLayout.tsx"));
// const Transactions = lazy(() => import("./pages/transactions/Transactions.page.tsx"));
const Dashboard = lazy(() => import("./pages/dashboard/Dashboard.page.tsx"));
// const Incomes = lazy(() => import("./pages/income/Incomes.page.tsx"));
// const Expenses = lazy(() => import("./pages/expenses/Expenses.page.tsx"));
const TransactionView = lazy(() => import("./components/transactionView/TransactionView.tsx"));

const routes: RouteObject[] = [
    {
        path: ROUTES.HOME,
        element: <HomePage />,
    },
    {
        path: ROUTES.ROOT,
        element: <ProtectedLayout> <AppLayout /> </ProtectedLayout>,
        errorElement: <ErrorELement />,
        children: [
            {
                path: ROUTES.TRANSACTIONS,
                element: <Suspense fallback={<LoadingUi />}>
                    <TransactionView
                        queryKey={QUERY_KEY.TRANSACTIONS}
                        dataLoader={loaderTransactions}
                    />
                </Suspense>,
            },
            {
                path: ROUTES.TRANSACTION_ID,
                element: <Suspense fallback={<LoadingUi />}><EditPage /></Suspense>,
                loader: async ({ params: { id } }) => loaderTransactionById(id)
            },
            {
                path: ROUTES.INCOMES,
                element: <Suspense fallback={<LoadingUi />}>
                    <TransactionView
                        queryKey={QUERY_KEY.INCOMES}
                        dataLoader={loaderIncomes}
                    />
                </Suspense>
            },
            {
                path: ROUTES.INCOME_ID,
                element: <EditPage />,
                loader: async ({ params: { id } }) => loaderTransactionById(id)
            },
            {
                path: ROUTES.EXPENSES,
                element: <Suspense fallback={<LoadingUi />}><TransactionView
                    queryKey={QUERY_KEY.EXPENSES}
                    dataLoader={loaderExpenses} />
                </Suspense >,
                index: true
            },
            {
                path: ROUTES.EXPENSE_ID,
                element: <EditPage />,
                loader: async ({ params: { id } }) => loaderTransactionById(id)
            },
            {
                path: ROUTES.DASHBOARD,
                element: <Suspense fallback={<LoadingUi />}><Dashboard /></Suspense>,
            },
            {
                path: ROUTES.SETTINGS,
                element: <Settings />
            }
        ]
    },
    {
        path: ROUTES.AUTH,
        element: <AuthorizationLayout />,
        children: [
            {
                path: ROUTES.LOGIN,
                element: <LogIn />
            },
            {
                path: ROUTES.SIGN_UP,
                element: <SignUp />
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