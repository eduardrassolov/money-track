import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import DropDownTrigger from './trigger/DropDownTrigger';
import DropDownContent from './content/DropDownContent';

export default function DropDownMenu() {
    return (
        <DropdownMenu.Root>
            <DropDownTrigger />

            <DropdownMenu.Portal>
                <DropDownContent />
            </DropdownMenu.Portal>
        </DropdownMenu.Root>
    )
}
