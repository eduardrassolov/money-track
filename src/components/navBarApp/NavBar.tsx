
import BurgerMenu from "../burger/BurgerMenu";
import { Nav } from "./NavBar.style";
import Search from "./search/Search";
import DropDownMenu from "./dropDown/DropDownMenu";

export interface IBar {
    isOpen: boolean,
    onBurgerClick: () => void;
}

export function NavBar({ isOpen, onBurgerClick }: IBar) {
    return (
        <Nav>
            <BurgerMenu isOpen={isOpen} onClose={onBurgerClick} />

            <Search />

            <DropDownMenu />
        </Nav >
    )
}
