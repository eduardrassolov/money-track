import useTheme from '../../../utils/hooks/useTheme';
import { HiMiniMoon, HiOutlineSun } from 'react-icons/hi2';

export default function ThemeToggle() {
    const { theme } = useTheme();

    const toggleText = theme.name === "light" ? "Night" : "Day";
    const toggleIcon = theme.name === "light" ? <HiMiniMoon /> : <HiOutlineSun />
    return (
        <>
            {toggleIcon} {toggleText}
        </>
    )
}
