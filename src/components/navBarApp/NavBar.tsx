import MenuDropDown from "./menuDropDown/MenuDropDown";
import BurgerMenu from "../burger/BurgerMenu";
import { Nav } from "./NavBar.style";
import Search from "./search/Search";

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
