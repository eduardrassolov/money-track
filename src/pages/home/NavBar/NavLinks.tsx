import { styled } from "styled-components"
import { NavLink } from "react-router-dom";
import { ROUTES } from "../../../router"
import { devices } from "../../../styles/breakPoints";
import { useUser } from "../../../utils/hooks/useUser";

const Ul = styled.ul<{ $isOpen: boolean }>`
        position: fixed;
        top: 0;
        right: 0;
        margin: 0;
        z-index: 25;
        height: 100vh;
        flex-flow: column;
        font-size: 1.1rem;
        padding: 2rem 1rem 0 ;
        background: #F9F5F6;
        display: ${props => props.$isOpen ? 'flex' : 'none'}; ;
        list-style: none;

        li{
            margin: 1rem auto 2rem 0;
            text-align: start;
            cursor: pointer;
            &:hover{
                color: #7286D3;
            }
        
        }

        @media only screen and (min-width: ${devices.md}px){
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

const StyledNavLink = styled(NavLink)`
    text-decoration: none;
    transition: all 0.3s ;
    color: black;

        transition: all 300ms;

    &:hover{
        transition: all 300ms;
        color: #7286D3;
    }
    
`
const A = styled.a`
    &:hover{
        transition: all 300ms;
        color: #7286D3;
    }
`

type NavLinksProps = {
    isOpen?: boolean;
    onClose?: () => void;
}


export default function NavLinks({ isOpen = false, onClose }: NavLinksProps) {
    const { isAuthenticated } = useUser();
    const handleClick = (id: string) => {
        onClose?.();
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
    return (
        <>
            <Ul $isOpen={isOpen}>
                <li>
                    <A onClick={() => handleClick("header")}>Home</A>
                </li >
                <li>
                    <A onClick={() => handleClick("feature")}>Features</A>
                </li>
                <li>
                    <StyledNavLink to={isAuthenticated ? ROUTES.DASHBOARD : ROUTES.LOGIN}>{isAuthenticated ? 'To app' : 'Login'}</StyledNavLink>
                </li>
            </Ul>
        </>
    )
}
