import { asideMenuList } from '../../../config/asideMenuList';
import { devices } from '../../../styles/breakPoints';
import AsideItem from '../AsideItem';
import { HiMiniArrowsUpDown, HiOutlineChartPie, HiOutlineCreditCard, HiOutlineShoppingBag } from 'react-icons/hi2'
import styled from 'styled-components';

const icons: Array<JSX.Element> =
    [<HiOutlineChartPie />, <HiOutlineShoppingBag />, <HiOutlineCreditCard />, <HiMiniArrowsUpDown />]

const Ul = styled.ul<{ $isBurgerOpen: boolean }>`
    display: ${props => props.$isBurgerOpen ? "flex" : "none"};
    flex-direction: ${props => props.$isBurgerOpen ? "column" : ""};
    position: ${props => props.$isBurgerOpen ? "absolute" : ""};
    background: ${props => props.theme.background};
    top: 0;
    left: 0;
    list-style: none;
    margin: 0;
    padding: ${props => props.$isBurgerOpen ? "4rem 0 0 0" : "0"};
    height: ${props => props.$isBurgerOpen ? "100vh" : "auto"};
    z-index: 50;

    @media only screen  and (min-width: ${devices.md}px){
        display: flex;
        flex-direction: row;
    }
`

interface INavMenu {
    isOpen: boolean,
    onCloseBurger: () => void
}

export default function NavMenu({ isOpen, onCloseBurger }: INavMenu) {
    return (
        <>
            <Ul $isBurgerOpen={isOpen}>
                {asideMenuList.map((item, index) => {
                    return <AsideItem key={item.name} name={item.name} path={item.path} icon={icons[index]} onCloseBurger={onCloseBurger} />
                })}
            </Ul>
        </>
    )
}
