import { useState } from "react"



export default function useTheme() {
    const [isDark, setDark] = useState(false);
    function changeTheme() {
        setDark(prev => !prev)
    }

    return { isDark, changeTheme }
}
