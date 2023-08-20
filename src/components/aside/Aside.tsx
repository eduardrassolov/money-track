import { styled } from "styled-components";
import AsideItem from "./AsideItem";
import { asideItemsName } from "../../config/configAsideItems";
import { AreaChartOutlined, DollarOutlined, ShoppingCartOutlined, CarryOutOutlined } from "@ant-design/icons";

const StyledAside = styled.aside`
    display: flex;
    flex-direction: column;
    height: 100vh;
    background-color: #f0f0f0;
    font-size: 1rem;

    ul {
        margin: 0;
        padding: 0;
        gap: 5rem;
    }
`

const icons: Array<JSX.Element> =
    [<AreaChartOutlined />, <ShoppingCartOutlined />, <DollarOutlined />, <CarryOutOutlined />]

export default function Aside() {
    return (
        <StyledAside>
            <ul>
                {asideItemsName.map((item, index) => <AsideItem key={item} name={item} icon={icons[index]} />)}
            </ul>
        </StyledAside>
    )
}
