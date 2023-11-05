
import { styled } from "styled-components";
import useTheme from "../../utils/hooks/useTheme";
import { HiMiniMoon, HiOutlineSun } from "react-icons/hi2";

export const NavIcons = styled.div`
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 300ms;
    padding: 0;
    margin: 0.5rem;
    cursor: pointer;
    color: ${(props) => props.theme.text};
    background: ${(props) => props.theme.backGround2};
    padding: 0.3rem;
    border-radius: 50%;

    &:hover{
        scale: 1.10;
        background: ${(props) => props.theme.colorLogoMain};
        color: #d2d2d2;
        transition: all 300ms;
    }
`
const DarkIcon = styled(HiMiniMoon) <{ $currentTheme: string }>`
    transform: ${(props) => props.$currentTheme === "dark" ? 'translateY(-5rem)' : 'translateY(0rem)'};
    transition: all 500ms cubic-bezier(.58,.65,.58,1.43);
    position: fixed;
`
const DayIcon = styled(HiOutlineSun) <{ $currentTheme: string }>`
    transform: ${(props) => props.$currentTheme === "light" ? 'translateY(-5rem)' : 'translateY(0)'};
    transition: all 500ms cubic-bezier(.58,.65,.58,1.43);
`

export default function ThemeSwitch() {
    const { theme: { name }, changeTheme } = useTheme();

    const handleClick = () => changeTheme();

    return (
        <NavIcons onClick={handleClick}>
            <DarkIcon $currentTheme={name} />
            <DayIcon $currentTheme={name} />
        </NavIcons>
    )
}
