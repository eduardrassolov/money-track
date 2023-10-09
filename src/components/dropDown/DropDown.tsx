import * as Select from '@radix-ui/react-select';
import React from "react";
import { useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-toastify';

import CreateCategorySection from './CreateCategorySection.tsx';
import Trigger from './Trigger.tsx';
import Scrolls from './ScrollsButtons.tsx';
import OptionItems from './OptionItems';

import { QUERY_KEY } from '../../config/queryClientKeys.ts';
import useCategorySelect from './useCategorySelect.ts';

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
    const { deleteCategory, isCreateMode, openCloseCreateMode: changeState } = useCategorySelect();

    function handleDelete(e: React.MouseEvent<HTMLButtonElement>, id: string) {
        e.preventDefault();

        deleteCategory(id, {
            onSuccess: () => queryClient.invalidateQueries([QUERY_KEY.USER_CATEGORIES]),
            onError: (error: unknown) => {
                if (error instanceof Error) {
                    toast.error(error?.message || "Something went wrong");
                }
            }
        })
    }
    const handleChange = (value: string) => onSelect(value);
    console.log("isCreateMode", isCreateMode);

    return (
        <Select.Root onValueChange={handleChange} value={selected} >
            <Trigger defaultValue={"Select category"} />

            <SelectMenu position="popper" >

                <Scrolls direction={"up"} />

                <ViewPort>
                    <OptionItems optionList={defaultOption} labelText={"Default category:"} isDisabled={isCreateMode} />
                    {customOption?.length
                        ?
                        <>
                            <Separator />
                            <OptionItems optionList={customOption} labelText={"Custom category:"} isDefaultCategory={false} onDelete={handleDelete} isDisabled={isCreateMode} />
                        </>
                        : ""
                    }
                    <Separator />
                    <CreateCategorySection type_id={currentTypeTransaction} isCreateMode={isCreateMode} changeState={changeState} />
                </ViewPort>

                <Scrolls direction={"down"} />

            </SelectMenu>
        </Select.Root>
    )


}

