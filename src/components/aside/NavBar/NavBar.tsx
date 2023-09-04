import { styled } from "styled-components";
import { FC } from "react";
import BurgerMenu from "../../burger/BurgerMenu";
import { devices } from "../../../styles/breakPoints";

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

    @media only screen and (min-width: ${devices.md}px){
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
            <BurgerMenu isOpen={isBurgerOpen} onClose={onClose} />
        </Nav >
    )
}
export default NavBar;
