import { asideMenuList } from '../../config/asideMenuList'
import AsideItem from './AsideItem'
import { HiMiniArrowsUpDown, HiOutlineChartPie, HiOutlineCreditCard, HiOutlineShoppingBag } from 'react-icons/hi2'

const icons: Array<JSX.Element> =
    [<HiOutlineChartPie />, <HiOutlineShoppingBag />, <HiOutlineCreditCard />, <HiMiniArrowsUpDown />]

export default function AsideList({ onClose }: { onClose: () => void }) {
    return (
        <ul>
            {asideMenuList.map((item, index) => {
                return <AsideItem key={item.name} name={item.name} path={item.path} icon={icons[index]} onClose={onClose} />
            })}
        </ul>
    )
}
