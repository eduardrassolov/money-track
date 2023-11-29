import { useState } from "react";
import usePagination from "../../pagination/usePagination";
import { useBoundStore } from "../../../store/store";
import { SearchInput } from "./Search.style";

export default function Search() {
    const [mask, setMask] = useState("");
    const { moveToPage } = usePagination();

    const setSearch = useBoundStore((state) => state.setSearch);

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setMask(() => e.target.value);
        setSearch(mask);
        moveToPage(1);
    }

    return (
        <SearchInput type="text" placeholder="Search transaction" value={mask} onInput={handleInput} />
    )
}
