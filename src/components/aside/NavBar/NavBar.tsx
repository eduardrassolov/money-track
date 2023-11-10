import { styled } from "styled-components";
import MenuDropDown from "./menuDropDown/MenuDropDown";
import { devices } from "../../../config/breakPoints";
import Search from "../../search/Search";

const Nav = styled.nav`
    background: ${(props) => props.theme.background};
    color: ${(props) => props.theme.text};
    border-bottom: 1px solid ${props => props.theme.border};
    display: flex;
    align-items: center;
    justify-content: flex-end;
    transition: all 300ms;
    padding: 0 1rem;
    height: 50px;
    gap: 1rem;

    @media only screen and (min-width: ${devices.md}px){
    }
`


export interface IBar {
    isBurgerOpen: boolean;
    onClose: () => void;
}

export function NavBar() {
    return (
        <Nav>
            <Search />
            {/* <BurgerMenu isOpen={isBurgerOpen} onClose={onClose} /> */}

            {/* <NavMenu isOpen={isBurgerOpen} onCloseBurger={onClose} /> */}

            <MenuDropDown />
        </Nav >
    )
}
