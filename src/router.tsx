import { RouteObject, createBrowserRouter, redirect } from "react-router-dom";
import AppLayout from "./layout/AppLayout.tsx";
import Incomes from "./pages/income/Incomes.page.tsx";
import Expenses from "./pages/expenses/Expenses.page.tsx";
import Dashboard from "./pages/dashboard/Dashboard.page.tsx";
import { loaderExpenses } from "./pages/expenses/loader.ts";
import { loaderIncomes } from "./pages/income/loader.ts";
import TransactionsList from "./components/transactionCard/TransactionsList.tsx";
import actionIncomes from "./pages/income/action.ts";
import actionExpenses from "./pages/expenses/action.ts";
import { toast } from "react-toastify";
import { loaderTransactions } from "./pages/transactions/loader.ts";
import Transactions from "./pages/transactions/Transactions.page.tsx";



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
                element: <Transactions />,
                loader: async () => loaderTransactions(),
            },
            {
                path: ROUTES.INCOMES,
                element: <Incomes />,
                loader: loaderIncomes,
                action: async ({ request }) => {
                    const { data, error } = await actionIncomes(request);
                    data ? toast.success('Income added successfully') : toast.error(error);

                    return redirect(ROUTES.INCOMES);
                },
            },
            {
                path: ROUTES.EXPENSES,
                element: <Expenses />,
                loader: loaderExpenses,
                action: async ({ request }) => {
                    const { data, error } = await actionExpenses(request);
                    data ? toast.success('Expense added successfully') : toast.error(error);

                    return redirect(ROUTES.EXPENSES);
                }
            },
            {
                path: ROUTES.DASHBOARD,
                element: <Dashboard />,
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