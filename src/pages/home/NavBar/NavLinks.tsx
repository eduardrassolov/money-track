import { styled } from "styled-components"
import { NavLink } from "react-router-dom";
import { ROUTES } from "../../../router"
import { devices } from "../../../styles/breakPoints";

const Ul = styled.ul<{ $isOpen: NavLinksProps }>`
        /* display: ${(props) => props.$isOpen ? 'flex' : 'none'}; */
        position: fixed;
        top: 0;
        right: 0;
        margin: 0;
        z-index: 25;
        height: 100vh;
        flex-flow: column;
        font-size: 1.1rem;
        padding: 4rem 2rem 0 ;
        background: #F9F5F6;
        /* transform: ${props => props.$isOpen ? 'translateX(0)' : 'translateX(15rem)'}; */
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

        @media only screen and ${devices.md} {
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


    &:hover{
        color: #7286D3;
        transition: all 200ms;
    }
    
`

type NavLinksProps = {
    isOpen?: boolean;
    onClose?: () => void;
}


export default function NavLinks({ isOpen = false, onClose }: NavLinksProps) {
    const handleClick = (id: string) => {
        onClose?.();
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
    return (
        <>
            <Ul $isOpen={isOpen}>
                <li>
                    <a onClick={() => handleClick("header")}>Home</a>
                </li >
                <li>
                    <a onClick={() => handleClick("feature")}>Features</a>
                </li>
                <li>
                    <StyledNavLink to={ROUTES.LOGIN}>Login</StyledNavLink>
                </li>
            </Ul>
        </>
    )
}
