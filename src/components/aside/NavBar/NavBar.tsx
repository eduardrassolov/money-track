import { styled } from "styled-components";
import { FC } from "react";
import BurgerMenu from "../../burger/BurgerMenu";
import MenuDropDown from "./menuDropDown/MenuDropDown";
import NavMenu from "./NavMenu";
import { devices } from "../../../styles/breakPoints";

const Nav = styled.nav`
    background: ${(props) => props.theme.background};
    color: ${(props) => props.theme.text};
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 100%;
    height: fit-content;
    position: absolute;
    transition: all 300ms;
    transform: translateY(0);
    z-index: 30;

    @media only screen and (min-width: ${devices.md}px){
        justify-content: space-between;
    }
`

export interface IBar {
    isBurgerOpen: boolean;
    onClose: () => void;
}

const NavBar: FC<IBar> = ({ isBurgerOpen, onClose }) => {
    return (
        <Nav>
            <BurgerMenu isOpen={isBurgerOpen} onClose={onClose} />

            <NavMenu isOpen={isBurgerOpen} onCloseBurger={onClose} />

            <MenuDropDown />
        </Nav >
    )
}
export default NavBar;
