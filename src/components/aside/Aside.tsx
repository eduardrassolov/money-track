import AsideItem from "./AsideItem";
import { asideItemsName } from "../../config/configAsideItems";
import { AreaChartOutlined, DollarOutlined, ShoppingCartOutlined, CarryOutOutlined } from "@ant-design/icons";
import { HiOutlineHome } from "react-icons/hi2";
import { StyledAside } from "./Aside.style";
import { useState } from "react";
import Burger from "../../pages/home/NavBar/Burger";


const icons: Array<JSX.Element> =
    [<AreaChartOutlined />,
    <ShoppingCartOutlined />,
    <DollarOutlined />,
    <CarryOutOutlined />,
    <HiOutlineHome />]

export default function MenuBar() {
    return (
        <>
            <StyledAside $isOpen={isOpen} >
                <ul>
                    {asideItemsName.map((item, index) => <AsideItem key={item} name={item} icon={icons[index]} />)}
                </ul>
            </StyledAside>
        </>
    )
}
