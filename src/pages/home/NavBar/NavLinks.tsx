import { styled } from "styled-components"
import { NavLink } from "react-router-dom";
import { ROUTES } from "../../../router"
import { devices } from "../../../styles/breakPoints";

const Ul = styled.ul<{ $isOpen: NavLinksProps }>`
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    list-style: none;
    margin: auto 2rem;

    li{
        margin: 0 0 0 2rem;     
        letter-spacing: 0.1rem;
    }

    @media only screen and ${devices.md} {
        display: ${(props) => props.$isOpen ? 'flex' : 'none'};
        position: fixed;
        height: 100vh;
        flex-flow: column;
        font-size: 1.1rem;
        top: 0;
        right: 0;
        margin: 0;
        padding: 3rem 0 0 0;
        background: #fff;
        align-items: start;
        width: 175px;

        li{
            margin: 1rem auto 1rem 0.5rem;
        }
    }
`
const A = styled.a`
    text-decoration: none;
    font-size: 1.2rem;
    transition: all 0.3s ease-in-out;
    color: black;


    &:hover{
        color: #8c8a8a;
        transition: all 300ms;
    }
`

const StyledNavLink = styled(NavLink)`
    text-decoration: none;
    font-size: 1.2rem;
    transition: all 0.3s ;
    color: black;


    &:hover{
        color: #8c8a8a;
        transition: all 200ms ;

    }
`



type NavLinksProps = {
    isOpen?: boolean;
    onClose: () => void;
}


export default function NavLinks({ isOpen = false, onClose }: NavLinksProps) {
    const handleClick = (id: string) => {
        onClose();
        document.getElementById(id).scrollIntoView({ behavior: "smooth" });

    }
    return (
        <>
            <Ul $isOpen={isOpen}>
                <li>
                    <span onClick={() => handleClick("header")}>Home</span>
                </li >
                <li>
                    {/* <A href="#feature">Features</A> */}
                    <span onClick={() => handleClick("feature")}>Features</span>
                </li>
                <li>
                    <StyledNavLink to={ROUTES.ROOT}>Start</StyledNavLink>
                </li>
            </Ul>
        </>
    )
}
