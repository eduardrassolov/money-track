import { useEffect, useState } from "react";
import { SearchInput } from "../input/Input";
import { useBoundStore } from "../../store/store";

//TODO check this component for refactoring
export default function Search() {
    const [mask, setMask] = useState("");
    const setSearch = useBoundStore((state) => state.setSearch);

    useEffect(() => {
        setSearch(mask);
    }, [mask])

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setMask(() => e.target.value);
        setSearch(mask);
    }

    return (
        <SearchInput type="text" placeholder="Search..." value={mask} onInput={handleInput} />
    )
}
