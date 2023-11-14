import styled from "styled-components";
import { asideMenuList } from "../../config/asideMenuList";
import AsideItem from "../aside/AsideItem";

import { HiMiniArrowsUpDown, HiOutlineChartPie, HiOutlineCreditCard, HiOutlineShoppingBag } from 'react-icons/hi2';
import { devices } from "../../config/breakPoints";

const StyledAside = styled.aside<{ $isOpen: boolean }>`
    background: ${props => props.theme.background};
    border: 1px solid ${props => props.theme.border};

    display: ${props => props.$isOpen ? "block" : "none"};
    position: absolute;
    height: 100vh;
    z-index: 20;
    padding: 2rem 0;

    @media only screen and (min-width: ${devices.md}px){
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
const Background = styled.div<{ $isOpen: boolean }>`
    position: absolute;
    display: ${props => props.$isOpen ? "flex" : "none"};
    z-index: 10;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(1px);
    
`

const icons: Array<JSX.Element> =
    [<HiOutlineChartPie />, <HiOutlineShoppingBag />, <HiOutlineCreditCard />, <HiMiniArrowsUpDown />]


export default function AsideBar({ isOpen = false, onClose }) {
    return (
        <>
            <Background $isOpen={isOpen} onClick={onClose} />
            <StyledAside $isOpen={isOpen}>
                <Ul>
                    {asideMenuList.map((item, index) =>
                        <AsideItem
                            key={item.name}
                            name={item.name}
                            path={item.path}
                            icon={icons[index]}
                            onCloseBurger={onClose}
                        />)}
                </Ul>
            </StyledAside></>
    )
}
