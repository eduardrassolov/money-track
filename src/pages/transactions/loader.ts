import getTransactions from "../../services/api/getTransactions";
import { ITransaction } from "../../interface/ITransactions";
import getRangeDates from "../../services/getRangeDate";
import { Filter } from "../../types/filterBy.type";
import { SortBy } from "../../types/sortBy.type";
import dayjs from "dayjs";

export interface ILoaderTransaction {
    filter: Filter;
    sortBy: SortBy;
    userId: string;
}
export const defaultSort: SortBy = { field: "completed_at", direction: "desc" };

export async function loaderTransactions(
    userId: string,
    filter: Filter = null,
    sortBy: SortBy = { ...defaultSort },
    from: string = "",
    to: string = ""
) {
    const filterByDate = !filter ? null : getRangeDates(filter);
    const data: Array<ITransaction> = await getTransactions({ filter: filterByDate, sortBy, userId });

    if (from && to) {
        const filteredData = data.filter((transaction) => {
            const date = dayjs(transaction.completedAt).format("YYYY-MM-DD");
            if (dayjs(date).isBetween(from, to, "day", "[]")) {
                console.log(true, date, from, to);
                return transaction;
            }
        });
        return filteredData;
    }

    return data;
}
