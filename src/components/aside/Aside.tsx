import AsideItem from "./AsideItem";
import { asideItemsName } from "../../config/configAsideItems";
import { AreaChartOutlined, DollarOutlined, ShoppingCartOutlined, CarryOutOutlined } from "@ant-design/icons";
import { HiOutlineHome } from "react-icons/hi2";
import { StyledAside } from "./Aside.style";
import { FC } from "react";
import { IBar } from "../../api/NavBar/NavBar";


const icons: Array<JSX.Element> =
    [<AreaChartOutlined />,
    <ShoppingCartOutlined />,
    <DollarOutlined />,
    <CarryOutOutlined />,
    <HiOutlineHome />]

const Aside: FC<IBar> = ({ isBurgerOpen, onClose }) => {
    return (
        <>
            <StyledAside $isBurgerOpen={isBurgerOpen} >
                <ul>
                    {asideItemsName.map((item, index) => <AsideItem key={item} name={item} icon={icons[index]} onClose={onClose} />)}
                </ul>
            </StyledAside>
        </>
    )
}
export default Aside;