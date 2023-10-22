import { styled } from "styled-components";
import { FC } from "react";
import BurgerMenu from "../../burger/BurgerMenu";
import MenuDropDown from "./menuDropDown/MenuDropDown";

const Nav = styled.nav`
    background: ${(props) => props.theme.background};
    color: ${(props) => props.theme.text};
    display: flex;
    align-items: center;
    justify-content: end;
    width: 100%;
    height: 1.5rem;
    position: fixed;
    padding: 1rem 1rem 1rem 0;
    transition: all 300ms;
    transform: translateY(0);
`

export interface IBar {
    isBurgerOpen: boolean;
    onClose: () => void;
}


const NavBar: FC<IBar> = ({ isBurgerOpen, onClose }) => {
    return (
        <Nav>
            <BurgerMenu isOpen={isBurgerOpen} onClose={onClose} />

            <MenuDropDown />
        </Nav >
    )
}
export default NavBar;
