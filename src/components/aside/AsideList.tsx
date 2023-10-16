import { asideItemsName } from '../../config/configAsideItems'
import { useUser } from '../../utils/hooks/useUser'
import AsideItem from './AsideItem'
import { HiMiniArrowsUpDown, HiOutlineChartPie, HiOutlineCreditCard, HiOutlineShoppingBag, HiOutlineWrenchScrewdriver } from 'react-icons/hi2'

const icons: Array<JSX.Element> =
    [<HiOutlineChartPie />, <HiOutlineShoppingBag />, <HiOutlineCreditCard />, <HiMiniArrowsUpDown />, <HiOutlineWrenchScrewdriver />]

export default function AsideList({ onClose }: { onClose: () => void }) {
    const { isDemo } = useUser();
    console.log("isdemo", isDemo);
    return (
        <ul>
            {asideItemsName.map((item, index) => {
                return <AsideItem key={item.name} name={item.name} path={item.path} icon={icons[index]} onClose={onClose} />
            })}
        </ul>
    )
}
