import { useEffect, useState } from "react";
import { SearchInput } from "../input/Input";
import { useCurrStore } from "../../store/store";

export default function Search() {
    const [mask, setMask] = useState("");
    const setSearch = useCurrStore((state) => state.setSearch);

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
