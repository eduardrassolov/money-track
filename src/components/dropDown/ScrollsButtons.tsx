import { ScrollDown, ScrollUp } from './DropDown.style';
import { ChevronDownIcon, ChevronUpIcon } from '@radix-ui/react-icons';

type Direction = 'up' | 'down';

export default function ScrollsButtons({ direction }: { direction: Direction }) {
    return (
        <>
            {direction === "up" ?
                <ScrollUp >
                    <ChevronUpIcon />
                </ScrollUp>
                :
                <ScrollDown>
                    <ChevronDownIcon />
                </ScrollDown>

            }
        </>
    )
}
