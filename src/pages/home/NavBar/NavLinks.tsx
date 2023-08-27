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
        cursor: pointer;
        padding: 1rem 0.5rem;
        
        &:hover{
            border-bottom: 1px solid #7286D3;
            transition: all 100ms;
            color: #7286D3;
        }
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
        background: #F9F5F6;
        align-items: start;
        width: 175px;
        -webkit-box-shadow: -5px 0px 19px -1px rgba(0,0,0,0.35);
        -moz-box-shadow: -5px 0px 19px -1px rgba(0,0,0,0.35);
        box-shadow: -5px 0px 19px -1px rgba(0,0,0,0.35);


        li{
            margin: 1rem auto 1rem 1rem;
        }
    }
`

const StyledNavLink = styled(NavLink)`
    text-decoration: none;
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
                    <span onClick={() => handleClick("feature")}>Features</span>
                </li>
                <li>
                    <StyledNavLink to={ROUTES.ROOT}>Start</StyledNavLink>
                </li>
            </Ul>
        </>
    )
}
