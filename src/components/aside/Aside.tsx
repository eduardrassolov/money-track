import { styled } from "styled-components";
import AsideItem from "./AsideItem";
import { asideItemsName } from "../../config/configAsideItems";
import { AreaChartOutlined, DollarOutlined, ShoppingCartOutlined, CarryOutOutlined } from "@ant-design/icons";
import { HiOutlineHome } from "react-icons/hi2";

const StyledAside = styled.aside`
    display: flex;
    flex-direction: column;
    height: 100vh;
    background-color: #fff;
    font-size: 1rem;
    box-shadow:
        0.4px 0px 0.5px rgba(0, 0, 0, 0.032),
        1.3px 0px 1.6px rgba(0, 0, 0, 0.048),
        6px 0px 7px rgba(0, 0, 0, 0.08);

    ul {
        margin: 0;
        padding: 0;
        gap: 5rem;
    }
`

const icons: Array<JSX.Element> =
    [<AreaChartOutlined />, <ShoppingCartOutlined />, <DollarOutlined />, <CarryOutOutlined />, <HiOutlineHome />]

export default function Aside() {
    return (
        <StyledAside>
            <ul>
                {asideItemsName.map((item, index) => <AsideItem key={item} name={item} icon={icons[index]} />)}
            </ul>
        </StyledAside>
    )
}
