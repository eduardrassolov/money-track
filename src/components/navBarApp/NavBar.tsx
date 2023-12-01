
import BurgerMenu from "../burger/BurgerMenu";
import { Nav } from "./NavBar.style";
import Search from "./search/Search";
import DropDownMenu from "./dropDown/DropDownMenu";
import { useLocation } from "react-router-dom";

export interface IBar {
    isOpen: boolean,
    onBurgerClick: () => void;
}

export function NavBar({ isOpen, onBurgerClick }: IBar) {
    const location = useLocation();
    const isDashboard = location.pathname.includes("dashboard");

    return (
        <Nav>
            <BurgerMenu isOpen={isOpen} onClose={onBurgerClick} />

            {!isDashboard ? <Search /> : ""}

            <DropDownMenu />
        </Nav >
    )
}
