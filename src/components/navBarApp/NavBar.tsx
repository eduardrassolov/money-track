import { styled } from "styled-components";
import MenuDropDown from "./menuDropDown/MenuDropDown";
import Search from "../search/Search";
import BurgerMenu from "../burger/BurgerMenu";
import { devices } from "../../config/breakPoints";

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
    justify-content: space-between;

    @media only screen and (min-width: ${devices.md}px) {
        justify-content: end;
    }
`

export interface IBar {
    isOpen: boolean,
    onBurgerClick: () => void;
}

export function NavBar({ isOpen, onBurgerClick }: IBar) {
    return (
        <Nav>
            <BurgerMenu isOpen={isOpen} onClose={onBurgerClick} />

            <Search />

            <MenuDropDown />
        </Nav >
    )
}
