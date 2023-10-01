import { forwardRef } from "react";
import * as Select from '@radix-ui/react-select';
import { Option } from "./DropDown.style";

const SelectItem = forwardRef<HTMLDivElement, Select.SelectItemProps>(
    ({ children, ...props }, forwardedRef) => {
        return (
            <Option {...props} ref={forwardedRef}>
                <Select.ItemText>{children}</Select.ItemText>
            </Option>
        );
    }
);
export default SelectItem;