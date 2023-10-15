import { StyledAside } from "./Aside.style";
import { FC } from "react";
import { IBar } from "./NavBar/NavBar";
import Profile from "../user/Profile";
import AsideList from "./AsideList";


const Aside: FC<IBar> = ({ isBurgerOpen, onClose }) => {
    return (
        <StyledAside $isBurgerOpen={isBurgerOpen}>
            <Profile />
            <AsideList onClose={onClose} />
        </StyledAside>
    )
}
export default Aside;