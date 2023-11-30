
import Logo from "../../../components/logo/Logo";
import ThemeSwitch from "../../../components/swtich/ThemeSwitch";
import Overlay from "../../../components/overlay/Overlay";
import NavLinks from "./navLinks/NavLinks";
import Burger from "./burgerHome/Burger";
//@ts-ignore
import { Nav, SwitchContainer } from "./NavbarHome.style";

interface INavBar {
    isOpen: boolean,
    onClose: () => void
};

export default function NavbarHome({ isOpen, onClose }: INavBar) {
    return (
        <Nav>
            <Logo />

            {/* <Background $isOpen={isOpen} onClick={onClose} /> */}
            <Overlay isShow={isOpen} onClose={onClose} />

            <SwitchContainer>
                <ThemeSwitch />
            </SwitchContainer>

            <NavLinks isOpen={isOpen} onClose={onClose} />
            <Burger isOpen={isOpen} onCLose={onClose} />
        </Nav >
    )
}
