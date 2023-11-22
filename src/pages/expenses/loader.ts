import dayjs from "dayjs";
import isBetween from "dayjs/plugin/isBetween";

import getExpenses from "../../services/api/getExpenses";
import { ITransaction } from "../../interface/ITransactions";
import getRangeDates from "../../services/getRangeDate";
import { defaultSort } from "../transactions/loader";
import { Filter } from "../../types/filterBy.type";
import { SortBy } from "../../types/sortBy.type";

dayjs.extend(isBetween);

export async function loaderExpenses(
    userId: string,
    filter: Filter = null,
    sortBy: SortBy = { ...defaultSort },
    from: string = "",
    to: string = ""
) {
    const filterByDate = !filter ? null : getRangeDates(filter);
    const data: Array<ITransaction> = await getExpenses({ filter: filterByDate, sortBy, userId });

    //TODO remove from here
    if (from && to) {
        const filteredData = data.filter((transaction) => {
            const date = dayjs(transaction.completedAt).format("YYYY-MM-DD");
            if (dayjs(date).isBetween(from, to, "day", "[]")) {
                return transaction;
            }
        });
        return filteredData;
    }

    return data;
}
