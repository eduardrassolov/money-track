import { HiMiniArrowsUpDown, HiOutlineChartPie, HiOutlineCreditCard, HiOutlineShoppingBag } from "react-icons/hi2";
import { asideMenuList } from "../../config/asideMenuList.ts";
import SideBarItem from "./menuItem/SideBarItem.tsx";
import { Background, StyledAsideBar, Ul } from "./sideBarNav.style.ts";


const icons: Array<JSX.Element> = [<HiOutlineChartPie />, <HiOutlineShoppingBag />, <HiOutlineCreditCard />, <HiMiniArrowsUpDown />];

interface IAsideBar {
    isOpen: boolean;
    onClose: () => void;
}

export default function SideBarNav({ isOpen = false, onClose }: IAsideBar) {
    return (
        <>
            <Background $isOpen={isOpen} onClick={onClose} />

            <StyledAsideBar $isOpen={isOpen}>
                <Ul>
                    {asideMenuList.map((item, index) => (
                        <SideBarItem key={item.name} name={item.name} path={item.path} icon={icons[index]} onCloseBurger={onClose} />
                    ))}
                </Ul>
            </StyledAsideBar>
        </>
    );
}
