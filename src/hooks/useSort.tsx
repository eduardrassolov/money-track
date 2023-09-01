import { useSearchParams } from "react-router-dom";
import { SortBy } from "../types/sortBy.type";

export default function useSort(): SortBy {
    const [params] = useSearchParams();
    const sortValue = params.get('sort') || 'completed_at';

    if (!sortValue.includes("desc")) {
        if (!sortValue.includes("asc")) {
            return { field: "completed_at", direction: "desc" } as SortBy;
        }
    }
    const [field, direction] = sortValue.split('-');
    return { field, direction } as SortBy;
}