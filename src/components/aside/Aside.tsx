import AsideItem from "./AsideItem";
import { asideItemsName } from "../../config/configAsideItems";
import { AreaChartOutlined, DollarOutlined, ShoppingCartOutlined, CarryOutOutlined } from "@ant-design/icons";
import { HiOutlineHome } from "react-icons/hi2";
import { StyledAside } from "./Aside.style";

const icons: Array<JSX.Element> =
    [<AreaChartOutlined />,
    <ShoppingCartOutlined />,
    <DollarOutlined />,
    <CarryOutOutlined />,
    <HiOutlineHome />]

export default function Aside() {
    return (
        <StyledAside>
            <ul>
                {asideItemsName.map((item, index) => <AsideItem key={item} name={item} icon={icons[index]} />)}
            </ul>
        </StyledAside>
    )
}
