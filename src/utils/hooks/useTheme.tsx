import { useEffect } from 'react';
import { useCurrStore } from '../../store/store';

export default function useTheme() {
    const { theme, toogleTheme } = useCurrStore((state) => state);

    useEffect(() => {
        const theme = localStorage.getItem("theme");
        if (theme) {
            toogleTheme(theme);
        }
        else {
            toogleTheme("light");
        }
    }, [])

    function changeTheme() {
        if (theme.name === "light") {
            toogleTheme("dark");
            localStorage.setItem("theme", "dark");
        }
        else {
            toogleTheme("light");
            localStorage.setItem("theme", "light");
        }
    }

    return { theme, changeTheme }
}
