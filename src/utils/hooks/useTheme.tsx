import React from 'react'
import { useThemeStore } from '../../store/store';

export default function useTheme() {
    const { theme, toogleTheme } = useThemeStore((state) => state);
    const changeTheme = () => {
        if (theme.name === "light") {
            toogleTheme("dark");
        }
        else
            toogleTheme("light");
    }
    return { theme, changeTheme }
}
