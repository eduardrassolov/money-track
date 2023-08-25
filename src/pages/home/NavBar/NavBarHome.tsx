
import { styled } from "styled-components"
import Burger from "./Burger"
import NavLinks from "./NavLinks"

const Nav = styled.nav`
    background: #F9F5F6;
    border-bottom: 2px solid #E5E5E5;
    font-size: 1rem;
    display: flex;
    text-align: center;
    justify-content: space-between;
    position: fixed;
    width: 100%;
`

const NavLogo = styled.div`
    display: flex;
    align-items: center;
    font-size: 1.5rem;
    font-weight: bold;
    margin: 0 2rem;
`



export default function NavBarHome() {

    return (
        <Nav>
            <NavLogo>
                <p>E-Budget</p>
            </NavLogo>
            <Burger />
            <NavLinks />
        </Nav >
    )
}
