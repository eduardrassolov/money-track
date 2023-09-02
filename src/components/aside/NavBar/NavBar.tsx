import BurgerMenu from "../../burger/BurgerMenu";
import { styled } from "styled-components";
import Overlay from "../../overlay/Overlay";
import { devices } from "../../../styles/breakPoints";
import { FC } from "react";

const Nav = styled.nav`
    background: #fff;
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 1.5rem;
    position: fixed;
    padding: 1rem;
    transition: all 300ms ease-in-out;
    transform: translateY(0);

    @media only screen and ${devices.md}{
        transform: translateY(-5rem);
    }
`

export interface IBar {
    isBurgerOpen: boolean;
    onClose: () => void;
}


const NavBar: FC<IBar> = ({ isBurgerOpen, onClose }) => {
    return (
        <Nav>
            {/* <BurgerMenu isOpen={isBurgerOpen} onClose={onClose} /> */}
        </Nav >
    )
}
export default NavBar;
