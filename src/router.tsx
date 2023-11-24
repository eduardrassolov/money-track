import { Suspense, lazy } from "react";
import { RouteObject, createBrowserRouter } from "react-router-dom";

import HomePage from "./pages/home/Home.page.tsx";
import ErrorELement from "./components/error/ErrorELement.tsx";
import ProtectedLayout from "./pages/layout/ProtectedLayout.tsx";
import Page404 from "./pages/errors/Page404.tsx";
import loaderTransactionById from "./pages/edit/loader.ts";
import LoadingUi from "./components/spinner/LoadingUi.tsx";
import AuthorizationLayout from "./pages/authorization/Authorization.page..tsx";
import LogIn from "./pages/authorization/login/LogIn.tsx";
import SignUp from "./pages/authorization/signUp/SignUp.tsx";
import { ROUTES } from "./config/routes.ts";
import { QUERY_KEY } from "./config/queryClientKeys.ts";


const AppLayout = lazy(() => import("./pages/layout/AppLayout.tsx"));
const Dashboard = lazy(() => import("./pages/dashboard/Dashboard.page.tsx"));
const TransactionView = lazy(() => import("./components/transactionView/TransactionView.tsx"));
const EditPage = lazy(() => import("./pages/edit/EditPage.tsx"));
const Settings = lazy(() => import("./pages/settings/Settings.page.tsx"));

const routes: RouteObject[] = [
    {
        path: ROUTES.HOME,
        element: <HomePage />,
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
        path: ROUTES.ROOT,
        element: <ProtectedLayout> <AppLayout /> </ProtectedLayout>,
        errorElement: <ErrorELement />,
        children: [
            {
                path: ROUTES.TRANSACTIONS,
                element:
                    <Suspense fallback={<LoadingUi />}>
                        <TransactionView
                            queryKey={QUERY_KEY.TRANSACTIONS}
                        />
                    </Suspense>,
            },
            {
                path: ROUTES.TRANSACTION_ID,
                element:
                    <Suspense fallback={<LoadingUi />}>
                        <EditPage />
                    </Suspense>,
                loader: async ({ params: { id } }) => loaderTransactionById(id)
            },
            {
                path: ROUTES.INCOMES,
                element:
                    <Suspense fallback={<LoadingUi />}>
                        <TransactionView
                            queryKey={QUERY_KEY.INCOMES}
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
                element:
                    <Suspense fallback={<LoadingUi />}>
                        <TransactionView
                            queryKey={QUERY_KEY.EXPENSES} />
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
        path: "*",
        element: <Page404 />
    }
]

const router = createBrowserRouter(routes);
export default router;