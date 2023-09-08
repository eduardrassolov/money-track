import AsideItem from "./AsideItem";
import { asideItemsName } from "../../config/configAsideItems";
import { AreaChartOutlined, DollarOutlined, ShoppingCartOutlined, CarryOutOutlined } from "@ant-design/icons";
import { StyledAside } from "./Aside.style";
import { FC } from "react";
import { IBar } from "./NavBar/NavBar";
import Profile from "../user/Profile";

const icons: Array<JSX.Element> =
    [<AreaChartOutlined />,
    <ShoppingCartOutlined />,
    <DollarOutlined />,
    <CarryOutOutlined />,
    ]
const Aside: FC<IBar> = ({ isBurgerOpen, onClose }) => {
    return (
        <>
            <StyledAside $isBurgerOpen={isBurgerOpen} >
                <div>
                    <Profile />
                    <ul>
                        {asideItemsName.map((item, index) => <AsideItem key={item} name={item} icon={icons[index]} onClose={onClose} />)}
                    </ul>
                </div>
            </StyledAside >
        </>
    )
}
export default Aside;