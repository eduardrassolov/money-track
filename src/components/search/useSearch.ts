import { useCurrStore } from "../../store/store";

function useSearch() {
  const search = useCurrStore((state) => state.search);
  const setSearch = useCurrStore((state) => state.setSearch);

  return { search, setSearch };
}

export default useSearch;
