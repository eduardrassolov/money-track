import { styled } from "styled-components";
import { FC } from "react";
import BurgerMenu from "../../burger/BurgerMenu";
import MenuDropDown from "./menuDropDown/MenuDropDown";
import { devices } from "../../../config/breakPoints";

const Nav = styled.nav`
    background: ${(props) => props.theme.background2};
    color: ${(props) => props.theme.text};
    border-bottom: 1px solid ${props => props.theme.border};
    display: flex;
    align-items: center;
    justify-content: space-between;
    transition: all 300ms;
    padding: 0 1rem;

    @media only screen and (min-width: ${devices.md}px){
    }
`

const H1 = styled.h1`
    margin: 0;
    font-size: 1.3rem;
`

export interface IBar {
    isBurgerOpen: boolean;
    onClose: () => void;
}

const NavBar: FC<IBar> = ({ isBurgerOpen, onClose }) => {
    return (
        <Nav>
            <H1>Title</H1>
            {/* <BurgerMenu isOpen={isBurgerOpen} onClose={onClose} /> */}

            {/* <NavMenu isOpen={isBurgerOpen} onCloseBurger={onClose} /> */}

            <MenuDropDown />
        </Nav >
    )
}
export default NavBar;
