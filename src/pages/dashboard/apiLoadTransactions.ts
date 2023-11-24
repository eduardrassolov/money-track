import { ITransaction } from "../../interface/ITransactions";

import supabase from "../../services/supabase";
import { Filter } from "../../types/filterBy.type";
import { SortBy } from "../../types/sortBy.type";

export const SELECT = {
    FULL_TRANSACTION_INFO: `id, amount, completed_at, description, 
        Category!inner(id, name, type:type_transaction!inner(id, name)),
        currency:Currency!inner(id, name, symbol, shortName, code)`,
};

export interface ILoaderTransaction {
    filter: Filter;
    sortBy: SortBy;
    userId: string;
}
export const defaultSort: SortBy = { field: "completed_at", direction: "desc" };

export async function apiLoadTransactions(userId: string, sortBy: SortBy = { ...defaultSort }) {
    try {
        let query = supabase
            .from("transactions")
            .select(SELECT.FULL_TRANSACTION_INFO)
            .eq("profile_id", userId)
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
