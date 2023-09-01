import { useSearchParams } from "react-router-dom";
import { FILTER_KEYS } from "../components/filter/filterParameters";
import { Filter } from "../types/filterBy.type";

export default function useFilter() {
    const [params] = useSearchParams();
    const filterValue = params.get(FILTER_KEYS.DATE);
    const filter = !filterValue ? null : filterValue as Filter;

    return { filter }
}
