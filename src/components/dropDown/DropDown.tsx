import * as Select from '@radix-ui/react-select';
import React from "react";
import { ChevronDownIcon, ChevronUpIcon, TrashIcon, ResetIcon, CheckIcon } from '@radix-ui/react-icons';
import { useQueryClient } from '@tanstack/react-query';
import { useUser } from '../../utils/hooks/useUser';
import { QUERY_KEY } from '../../config/queryClientKeys';
import useCategorySelect from './useCategorySelect';
import { StyledInput } from '../input/Input';
import { PrimaryBtn } from '../../styles/Button';
import { ButtonIcon, CreateContainer, CustomOption, Group, Label, Option, ScrollDown, ScrollUp, SelectMenu, SelectTrigger, Separator, ViewPort } from './DropDown.style';

interface IDropDown {
    defaultOption: any;
    customOption?: any;
    selected?: string;
    onSelect?: any
}

const SelectItem = React.forwardRef(({ children, className, ...props }, forwardedRef) => {
    return (
        <Option {...props} ref={forwardedRef}>
            <Select.ItemText>{children}</Select.ItemText>
        </Option>
    );
});

export default function DropDown({defaultOption, customOption = [], selected, onSelect}: IDropDown) {
    const queryClient = useQueryClient();
    const {isCreateMode, categoryName, changeCategoryName, openCloseCreateMode, addCategory, deleteCategory, clear} = useCategorySelect();
   

    const {user} = useUser();

    const handleCategoryName = (e) => changeCategoryName(e.target.value);
    const handleOpen = () => openCloseCreateMode();
    const handleCancel = () => clear();

    function handleCreate(e){
        e.preventDefault();
        addCategory({user_id: user?.id, name: categoryName, type_id:1}, {
            onSuccess: () => queryClient.invalidateQueries([QUERY_KEY.USER_CATEGORIES])
        });
    }
    function handleDelete(e, id: string){
        e.preventDefault();

        deleteCategory(id, {
            onSuccess: () => queryClient.invalidateQueries([QUERY_KEY.USER_CATEGORIES])
        })
    }
    function handleChange(value){
        onSelect(() => value);
    }

    return (
    <Select.Root onValueChange={handleChange} value={selected}>
        <SelectTrigger>
            <Select.Value placeholder={"Select category"} />
            <Select.Icon>
                <ChevronDownIcon />
            </Select.Icon>
        </SelectTrigger>
            <SelectMenu position="popper">

            <ScrollUp >
                <ChevronUpIcon />
            </ScrollUp>

                <ViewPort>
                    <Group>
                        <Label>Default categories</Label>
                            {defaultOption.map((option: any) => 
                                <SelectItem key={option.id} value={option.id}>{option.name}</SelectItem>
                            )}
                    </Group>

                    {customOption?.length ? 
                        <>
                        <Separator />   
                            <Group>
                                <Label>User categories</Label>
                                    {customOption.map((option: any) =>
                                        <CustomOption key={option.id}>
                                            <SelectItem value={option.id}>{option.name}</SelectItem>

                                            <ButtonIcon onClick={(e) => handleDelete(e, option.id.toString())}>
                                                <TrashIcon />
                                            </ButtonIcon>
                                        </CustomOption>
                                    )}
                            </Group>
                        </>
                    : ""
                    }
                    
                    <Separator />
                    
                    <Group>
                        <CreateContainer>
                        {isCreateMode ? 
                            <>
                                <StyledInput placeholder="Enter new category" value={categoryName} onInput={handleCategoryName} autoFocus/>
                                <ButtonIcon onClick={handleCreate}><CheckIcon /></ButtonIcon>
                                <ButtonIcon onClick={handleCancel}><ResetIcon /></ButtonIcon>
                            </>
                            
                            : <PrimaryBtn onClick={handleOpen}>New category</PrimaryBtn>
                        }
                        </CreateContainer>
                        
                    </Group>
                </ViewPort>

            <ScrollDown >
                <ChevronDownIcon />
            </ScrollDown>
            
            </SelectMenu>
    </Select.Root>
    )

    
}

