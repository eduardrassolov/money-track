import { HiMiniArrowsUpDown, HiOutlineChartPie, HiOutlineCreditCard, HiOutlineShoppingBag } from "react-icons/hi2";

import { asideMenuList } from "../../config/asideMenuList";
import AsideItem from "./AsideItem";
import { Background, StyledAside, Ul } from "./asideBar.style";

const icons: Array<JSX.Element> = [<HiOutlineChartPie />, <HiOutlineShoppingBag />, <HiOutlineCreditCard />, <HiMiniArrowsUpDown />];

interface IAsideBar {
    isOpen: boolean;
    onClose: () => void;
}

export default function AsideBar({ isOpen = false, onClose }: IAsideBar) {
    return (
        <>
            <Background $isOpen={isOpen} onClick={onClose} />

            <StyledAside $isOpen={isOpen}>
                <Ul>
                    {asideMenuList.map((item, index) => (
                        <AsideItem key={item.name} name={item.name} path={item.path} icon={icons[index]} onCloseBurger={onClose} />
                    ))}
                </Ul>
            </StyledAside>
        </>
    );
}
