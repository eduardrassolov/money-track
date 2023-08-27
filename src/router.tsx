import { RouteObject, createBrowserRouter, redirect } from "react-router-dom";
import AppLayout from "./layout/AppLayout.tsx";
import Incomes from "./pages/income/Incomes.page.tsx";
import Expenses from "./pages/expenses/Expenses.page.tsx";
import Dashboard from "./pages/dashboard/Dashboard.page.tsx";

import actionIncomes from "./pages/income/action.ts";
import actionExpenses from "./pages/expenses/action.ts";
import { toast } from "react-toastify";
import { loaderTransactions } from "./pages/transactions/loader.ts";
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
                // loader: ({ request }) => loaderTransactions(request),
            },
            {
                path: ROUTES.INCOMES,
                element: <Incomes />,
                // loader: loaderIncomes,
                // action: async ({ request }) => {
                //     const { data, error } = await actionIncomes(request);
                //     data ? toast.success('Income added successfully') : toast.error(error);

                //     return redirect(ROUTES.INCOMES);
                // },
            },
            {
                path: ROUTES.EXPENSES,
                element: <Expenses />,
                // loader: loaderExpenses,
                // action: async ({ request }) => {
                //     const { data, error } = await actionExpenses(request);
                //     data ? toast.success('Expense added successfully') : toast.error(error);

                //     return redirect(ROUTES.EXPENSES);
                // }
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