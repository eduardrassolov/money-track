
import { styled } from "styled-components"
import NavLinks from "./NavLinks"
import Overlay from "../../../components/overlay/Overlay"


const Nav = styled.nav`
    background: #F9F5F6;
    border-bottom: 2px solid #E5E5E5;
    font-size: 1rem;
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    width: 100%;
`

const NavLogo = styled.div`
    display: flex;
    align-items: center;
    font-size: 1.5rem;
    font-weight: bold;
    margin: auto 1rem;

    p{
        &:hover{
            color: #7286D3;
            transition: all 300ms ease-in-out;
            cursor: pointer;
        }
    }
`
interface INavBar {
    isOpen: boolean,
    onClose: () => void
}

export default function NavBarHome({ isOpen, onClose }: INavBar) {

    const handleClick = () => document.getElementById("header")?.scrollIntoView({ behavior: "smooth" });

    return (
        <Nav>
            <NavLogo>
                <p onClick={handleClick}>E-Budget</p>
            </NavLogo>

            <Overlay isShow={isOpen} onClose={onClose} />

            <NavLinks isOpen={isOpen} onClose={onClose} />
        </Nav >
    )
}
