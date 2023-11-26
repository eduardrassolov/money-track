import { useBoundStore } from "../../../store/store";

export default function useSearch() {
    const { search, setSearch } = useBoundStore((state) => ({
        search: state.search,
        setSearch: state.setSearch,
    }));

    return { search, setSearch };
}
