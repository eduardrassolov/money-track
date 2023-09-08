
import { styled } from "styled-components"
import NavLinks from "./NavLinks"
import Overlay from "../../../components/overlay/Overlay"
import Logo from "../../../components/logo/Logo"
import Switch from "../../../components/swtich/Switch"
import { devices } from "../../../styles/breakPoints"

const Nav = styled.nav`
    background: ${(props) => props.theme.background};
    border-bottom: 2px solid ${props => props.theme.border};
    font-size: 1rem;
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    width: 100%;
    transition: all 300ms;
`

const SwitchContainer = styled.div`
    margin: auto 4rem ;

    @media only screen and (min-width: ${devices.md}px){
        display: none;
    }
    
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

            <SwitchContainer>
                <Switch />
            </SwitchContainer>

            <NavLinks isOpen={isOpen} onClose={onClose} />
        </Nav >
    )
}
