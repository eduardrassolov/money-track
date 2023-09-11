import { useEffect } from 'react';
import { useThemeStore } from '../../store/store';


export default function useTheme() {
    const { theme, toogleTheme } = useThemeStore((state) => state);

    useEffect(() => {
        const theme = localStorage.getItem("theme");
        if (theme) {
            toogleTheme(theme);
        }
    }, [])

    function changeTheme() {
        if (theme.name === "light") {
            toogleTheme("dark");
            localStorage.setItem("theme", "dark");
        }
        else {
            toogleTheme("light");
            localStorage.setItem("theme", "dark");
        }
    }

    return { theme, changeTheme }
}
