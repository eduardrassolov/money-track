import { styled } from "styled-components"
import { useNavigate } from "react-router-dom";
import { devices } from "../../../styles/breakPoints";

import ThemeSwitch from "../../../components/swtich/ThemeSwitch";
import { ROUTES } from "../../../config/routes";
import { CTAButton } from "../HeaderSection/HeaderSection.style";

const Ul = styled.ul<{ $isOpen: boolean }>`
    position: fixed;
    top: 0;
    right: 0;
    margin: 0;
    z-index: 25;
    height: 100vh;
    flex-flow: column;
    font-size: 1.1rem;
    padding: 5rem 2rem 0 ;
    background: ${props => props.theme.background};
    display: ${props => props.$isOpen ? 'flex' : 'none'}; ;
    list-style: none;
    transition: all 300ms;

    li{
        margin: 1rem auto 2rem 0;
        text-align: start;
        cursor: pointer;

        &:hover{
            color: ${props => props.theme.colorLogoMain}
        }
        
    }

    @media only screen and (min-width: ${devices.md}px){
        background: transparent;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        transform: translateX(0);
        height: auto;
        margin: 0;
        padding: 0;
        position: static;
        li{
            margin: 0 1rem 0;
        }
    }
`

const A = styled.a`
    &:hover{
        transition: all 300ms;
        color: ${props => props.theme.colorLogoMain}
    }
`

type NavLinksProps = {
    isOpen?: boolean;
    onClose?: () => void;
}

const Li = styled.li`
    display: none;
    @media only screen and (min-width: ${devices.md}px){
        display: flex;
    }
`


export default function NavLinks({ isOpen = false, onClose }: NavLinksProps) {
    const navigate = useNavigate();
    const handleClick = (id: string) => {
        onClose?.();
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }

    const handleClickStart = () => navigate(ROUTES.LOGIN);

    return (
        <Ul $isOpen={isOpen}>
            <Li>
                <ThemeSwitch />
            </Li>
            <li>
                <A onClick={() => handleClick("header")}>Home</A>
            </li >
            <li>
                <A onClick={() => handleClick("feature")}>Features</A>
            </li>
            <li>
                <CTAButton onClick={handleClickStart}>Go to app</CTAButton>
            </li>

        </Ul>
    )
}
