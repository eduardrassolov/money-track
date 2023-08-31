import BurgerMenu from "../../components/burger/BurgerMenu";
import { styled } from "styled-components";
import Overlay from "../../components/overlay/Overlay";
import { devices } from "../../styles/breakPoints";
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
            <Overlay isShow={isBurgerOpen} onClose={onClose} />
        </Nav >
    )
}
export default NavBar;
