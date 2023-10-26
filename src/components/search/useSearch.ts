import { useBoundStore } from "../../store/store";

function useSearch() {
  const { search, setSearch } = useBoundStore((state) => ({
    search: state.search,
    setSearch: state.setSearch,
  }));

  return { search, setSearch };
}

export default useSearch;
