import * as Select from '@radix-ui/react-select';
import React from "react";
import { useQueryClient } from '@tanstack/react-query';

import { QUERY_KEY } from '../../config/queryClientKeys.ts';
import useCategorySelect from './useCategorySelect';

import { toast } from 'react-toastify';

import OptionItems from './OptionItems';

import CreateCategorySection from './CreateCategorySection.tsx';
import Trigger from './Trigger.tsx';
import Scrolls from './ScrollsButtons.tsx';

import { SelectMenu, Separator, ViewPort } from './DropDown.style';

interface IDropDown {
    defaultOption: any;
    customOption?: any;
    selected?: string;
    onSelect?: any;
    currentTypeTransaction: number;
}

export default function DropDown({ defaultOption, customOption = [], selected, onSelect, currentTypeTransaction }: IDropDown) {
    const queryClient = useQueryClient();
    const { deleteCategory } = useCategorySelect();

    function handleDelete(e: React.MouseEvent<HTMLButtonElement>, id: string) {
        e.preventDefault();

        deleteCategory(id, {
            onSuccess: () => queryClient.invalidateQueries([QUERY_KEY.USER_CATEGORIES]),
            onError: (error: unknown) => toast.error(error?.message || "Something went wrong")
        })
    }
    const handleChange = (value: string) => onSelect(() => value);


    return (
        <Select.Root onValueChange={handleChange} value={selected}>
            <Trigger defaultValue={"Select category"} />

            <SelectMenu position="popper">

                <Scrolls direction={"up"} />

                <ViewPort>
                    <OptionItems optionList={defaultOption} labelText={"Default category:"} />

                    {customOption?.length
                        ?
                        <>
                            <Separator />
                            <OptionItems optionList={customOption} labelText={"Custom category:"} isDefaultCategory={false} onDelete={handleDelete} />
                        </>
                        : ""
                    }
                    <Separator />

                    <CreateCategorySection type_id={currentTypeTransaction} />

                </ViewPort>

                <Scrolls direction={"down"} />

            </SelectMenu>
        </Select.Root>
    )


}

