
import Logo from "../../../components/logo/Logo";
import ThemeSwitch from "../../../components/swtich/ThemeSwitch";
import NavLinks from "./navLinks/NavLinks";
import Burger from "./burger/Burger";
import { Nav, SwitchContainer } from "./NavBarHome.style";

import Overlay from "../../../components/overlay/Overlay";


interface INavBar {
    isOpen: boolean,
    onClose: () => void
};

export default function NavBarHome({ isOpen, onClose }: INavBar) {
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
