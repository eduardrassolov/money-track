import { ChevronDownIcon } from '@radix-ui/react-icons'
import * as Select from '@radix-ui/react-select';
import { SelectTrigger } from './DropDown.style'

export default function Trigger({ defaultValue }: { defaultValue: string }) {
    return (
        <SelectTrigger>
            <Select.Value placeholder={defaultValue} />
            <Select.Icon>
                <ChevronDownIcon />
            </Select.Icon>
        </SelectTrigger>
    )
}
