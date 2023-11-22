import dayjs from "dayjs";
import { QUERY_KEY } from "../../config/queryClientKeys";
import TYPES_TRANSACTION from "../../config/typeTransactions";
import { ITransaction } from "../../interface/ITransactions";
import { defaultSort } from "../../pages/transactions/loader";
import supabase from "../../services/supabase";
import { SortBy } from "../../types/sortBy.type";

export const SELECT = {
    FULL_TRANSACTION_INFO: `id, amount, completed_at, description, 
        Category!inner(id, name, type:type_transaction!inner(id, name)),
        currency:Currency!inner(id, name, symbol, shortName, code)`,
};

function getTransactionType(type: string): number {
    if (type === QUERY_KEY.EXPENSES) {
        return TYPES_TRANSACTION.EXPENSE;
    } else if (type === QUERY_KEY.INCOMES) {
        return TYPES_TRANSACTION.INCOME;
    } else {
        return 0;
    }
}

export async function loadTransactions(userId, transactionType, from, to, sortBy: SortBy = { ...defaultSort }) {
    const type = getTransactionType(transactionType);

    try {
        let query = supabase
            .from("transactions")
            .select(SELECT.FULL_TRANSACTION_INFO)
            .eq("profile_id", userId)
            .eq("Category.type.id", type)
            .order(sortBy.field, { ascending: sortBy.direction === "asc" ? true : false });

        const { data } = await query;

        if (!data) {
            return new Array<ITransaction>();
        }

        const transactions: Array<ITransaction> = data.map((transaction: any) => {
            return {
                id: transaction.id,
                description: transaction.description,
                amount: transaction.amount,
                type: { id: transaction.Category.type.id, name: transaction.Category.type.name },
                category: { id: transaction.Category.id, name: transaction.Category.name },
                completedAt: new Date(transaction.completed_at),
                profileId: transaction.profile_id,
                currency: transaction.currency,
            };
        });

        return transactions;
    } catch (err) {
        if (err instanceof Error) {
            throw err;
        }
    }
}
