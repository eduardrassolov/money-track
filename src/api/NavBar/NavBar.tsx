import BurgerMenu from "../../components/burger/BurgerMenu";
import { styled } from "styled-components";
import useBurgerMenu from "./useBurger";
import { StyledAside } from "../../components/aside/Aside.style";
import { asideItemsName } from "../../config/configAsideItems";
import AsideItem from "../../components/aside/AsideItem";

import { AreaChartOutlined, CarryOutOutlined, DollarOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { HiOutlineHome } from "react-icons/hi";
import Overlay from "../../components/overlay/Overlay";

const Nav = styled.nav`
    background: #fff;
    display: flex;
    justify-content: space-between;
    width: 100%;
    position: fixed;
    padding: 1rem;
   
`

const icons: Array<JSX.Element> =
    [<AreaChartOutlined />,
    <ShoppingCartOutlined />,
    <DollarOutlined />,
    <CarryOutOutlined />,
    <HiOutlineHome />]

export default function NavBar() {
    const { isBurgerOpen, handleBurger } = useBurgerMenu();

    console.log(isBurgerOpen)
    return (
        <Nav>
            <BurgerMenu isOpen={isBurgerOpen} handleBurger={handleBurger} />
            <Overlay isShow={isBurgerOpen} onClose={handleBurger} />

            <StyledAside $isBurgerOpen={isBurgerOpen} >
                <ul>
                    {asideItemsName.map((item, index) => <AsideItem key={item} name={item} icon={icons[index]} handleBurger={handleBurger} />)}
                </ul>
            </StyledAside>
        </Nav >
    )
}
