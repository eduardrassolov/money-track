import { asideItemsName } from '../../config/configAsideItems'
import AsideItem from './AsideItem'
import { HiMiniArrowsUpDown, HiOutlineChartPie, HiOutlineCreditCard, HiOutlineShoppingBag, HiOutlineWrenchScrewdriver } from 'react-icons/hi2'

const icons: Array<JSX.Element> =
    [<HiOutlineChartPie />, <HiOutlineShoppingBag />, <HiOutlineCreditCard />, <HiMiniArrowsUpDown />, <HiOutlineWrenchScrewdriver />]

export default function AsideList({ onClose }: { onClose: () => void }) {
    return (
        <ul>
            {asideItemsName.map((item, index) => <AsideItem key={item.name} name={item.name} path={item.path} icon={icons[index]} onClose={onClose} />)}
        </ul>
    )
}
