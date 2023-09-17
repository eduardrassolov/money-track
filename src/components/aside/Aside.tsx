import AsideItem from "./AsideItem";
import { asideItemsName } from "../../config/configAsideItems";
import { StyledAside } from "./Aside.style";
import { FC } from "react";
import { IBar } from "./NavBar/NavBar";
import Profile from "../user/Profile";
import { HiMiniArrowsUpDown, HiOutlineChartPie, HiOutlineCreditCard, HiOutlineShoppingBag, HiOutlineWrenchScrewdriver } from "react-icons/hi2";

const icons: Array<JSX.Element> =
    [ <HiOutlineChartPie />, <HiOutlineShoppingBag />, <HiOutlineCreditCard />, <HiMiniArrowsUpDown />, <HiOutlineWrenchScrewdriver /> ]

const Aside: FC<IBar> = ({ isBurgerOpen, onClose }) => {
    return (
        <>
            <StyledAside $isBurgerOpen={isBurgerOpen} >
                <div>
                    <Profile />
                    <ul>
                        {asideItemsName.map((item, index) => <AsideItem key={item.name} name={item.name} path={item.path} icon={icons[index]} onClose={onClose} />)}
                    </ul>
                </div>
            </StyledAside >
        </>
    )
}
export default Aside;