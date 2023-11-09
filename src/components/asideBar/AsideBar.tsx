import styled from "styled-components";
import { asideMenuList } from "../../config/asideMenuList";
import AsideItem from "../aside/AsideItem";

import { HiMiniArrowsUpDown, HiOutlineChartPie, HiOutlineCreditCard, HiOutlineShoppingBag } from 'react-icons/hi2';
import { devices } from "../../config/breakPoints";

const StyledAside = styled.aside`
    background: ${props => props.theme.background2};
    border: 1px solid ${props => props.theme.border};
    display: none;

    @media only screen and (min-width: ${devices.sm}px){
        display: block;
    }
`

const Ul = styled.ul`
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 0.2rem;
    margin: 2rem 0;
    padding: 0;
`

const icons: Array<JSX.Element> =
    [<HiOutlineChartPie />, <HiOutlineShoppingBag />, <HiOutlineCreditCard />, <HiMiniArrowsUpDown />]


export default function AsideBar() {
    function close() { }
    return (
        <StyledAside>
            <Ul>
                {asideMenuList.map((item, index) =>
                    <AsideItem
                        key={item.name}
                        name={item.name}
                        path={item.path}
                        icon={icons[index]}
                        onCloseBurger={close}
                    />)}
            </Ul>
        </StyledAside>
    )
}
