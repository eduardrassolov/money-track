
import { styled } from "styled-components"
import NavLinks from "./NavLinks"
import Overlay from "../../../components/overlay/Overlay"
import Logo from "../../../components/logo/Logo"

const Nav = styled.nav`
    background: ${(props) => props.theme.body};
    border-bottom: 2px solid #E5E5E5;
    font-size: 1rem;
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    width: 100%;
`
interface INavBar {
    isOpen: boolean,
    onClose: () => void
}

export default function NavBarHome({ isOpen, onClose }: INavBar) {
    return (
        <Nav>
            <Logo />

            <Overlay isShow={isOpen} onClose={onClose} />

            <NavLinks isOpen={isOpen} onClose={onClose} />
        </Nav >
    )
}
