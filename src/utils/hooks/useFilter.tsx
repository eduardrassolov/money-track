import { useSearchParams } from "react-router-dom";
import { Filter } from "../../types/filterBy.type";
import { FILTER_KEYS } from "../../components/operations/filter/filterParameters";
import { useBoundStore } from "../../store/store";


export default function useFilter() {
    const [params] = useSearchParams();
    const filterValue = params.get(FILTER_KEYS.DATE);
    const filter = !filterValue ? null : filterValue as Filter;

    const range = useBoundStore(state => state.filterRange);

    return { filter, from: range.from, to: range.to };
}
