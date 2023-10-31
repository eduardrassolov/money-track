import { useEffect, useState } from "react";
import { SearchInput } from "../input/Input";
import { useBoundStore } from "../../store/store";
import usePagination from "../../utils/hooks/usePagination";

//TODO check this component for refactoring
export default function Search() {
    const [mask, setMask] = useState("");
    const { moveToPage } = usePagination();
    const setSearch = useBoundStore((state) => state.setSearch);

    useEffect(() => {
        setSearch(mask);
    }, [mask])

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setMask(() => e.target.value);
        setSearch(mask);
        moveToPage(1);

    }

    return (
        <SearchInput type="text" placeholder="Search..." value={mask} onInput={handleInput} />
    )
}
