import { useEffect } from 'react';
import { useBoundStore } from '../../store/store';

export default function useTheme() {
    // const { theme, toogleTheme } = useCurrStore((state) => state);
    const { theme, toggleTheme } = useBoundStore(state => ({
        theme: state.theme,
        toggleTheme: state.toggleTheme
    }))

    useEffect(() => {
        const theme = localStorage.getItem("theme");
        if (theme) {
            toggleTheme(theme);
        }
        else {
            toggleTheme("light");
        }
    }, [])

    function changeTheme() {
        if (theme.name === "light") {
            toggleTheme("dark");
            localStorage.setItem("theme", "dark");
        }
        else {
            toggleTheme("light");
            localStorage.setItem("theme", "light");
        }
    }

    return { theme, changeTheme }
}
