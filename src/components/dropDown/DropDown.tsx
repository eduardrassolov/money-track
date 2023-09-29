import * as Select from '@radix-ui/react-select';
import React, { forwardRef } from "react";
import { ChevronDownIcon, ChevronUpIcon, ResetIcon, CheckIcon } from '@radix-ui/react-icons';
import { useQueryClient } from '@tanstack/react-query';
import { useUser } from '../../utils/hooks/useUser';
import { QUERY_KEY } from '../../config/queryClientKeys';
import useCategorySelect from './useCategorySelect';
import { StyledInput } from '../input/Input';
import { PrimaryBtn } from '../../styles/Button';
import { ButtonIcon, Container, CreateContainer, CustomOption, Group, Label, Option, ScrollDown, ScrollUp, SelectMenu, SelectTrigger, Separator, StyledDiv, ViewPort } from './DropDown.style';
import { toast } from 'react-toastify';
import { HiOutlineTrash } from 'react-icons/hi2';
import { useLocation, useNavigation, useParams } from 'react-router-dom';
import TYPES_TRANSACTION from '../../config/typeTransactions';

interface IDropDown {
    defaultOption: any;
    customOption?: any;
    selected?: string;
    onSelect?: any;
    currentTypeTransaction: number;
}
interface SelectItemProps {
    children: React.ReactNode;
    value?: string
}

const SelectItem = forwardRef<HTMLDivElement, SelectItemProps>(
    ({ children, ...props }, forwardedRef) => {
        return (
            <Option {...props} ref={forwardedRef}>
                <Select.ItemText>{children}</Select.ItemText>
            </Option>
        );
    }
);

export default function DropDown({defaultOption, customOption = [], selected, onSelect, currentTypeTransaction}: IDropDown) {
    const queryClient = useQueryClient();
    const {isCreateMode, categoryName, changeCategoryName, openCloseCreateMode, addCategory, deleteCategory, clear} = useCategorySelect();

    const {user} = useUser();

    const handleOpen = () => openCloseCreateMode();
    const handleCancel = () => clear();
    const handleCategoryName = (e: React.ChangeEvent<HTMLInputElement>) => changeCategoryName(e.target.value);
    function handleCreate(e: React.MouseEvent<HTMLButtonElement>){
        e.preventDefault();
        addCategory({user_id: user?.id, name: categoryName, type_id: currentTypeTransaction}, {
            onSuccess: () => queryClient.invalidateQueries([QUERY_KEY.USER_CATEGORIES])
        });
    }
    function handleDelete(e: React.MouseEvent<HTMLButtonElement>, id: string){
        e.preventDefault();

        deleteCategory(id, {
            onSuccess: () => queryClient.invalidateQueries([QUERY_KEY.USER_CATEGORIES]),
            onError: (error: unknown) => toast.error(error?.message || "Something went wrong")
        })
    }
    const handleChange = (value: string) => onSelect(() => value);


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

                    <Group> 
                                                
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
                                                {/* <TrashIcon /> */}
                                                <HiOutlineTrash />
                                            </ButtonIcon>
                                        </CustomOption>
                                    )}
                            </Group>
                        </>
                    : ""
                    }
                    <Separator />  
                    <CreateContainer>
                                    {isCreateMode ? 
                                        <StyledDiv>
                                            <StyledInput placeholder="Enter new category" value={categoryName} onInput={handleCategoryName} autoFocus/>
                                            <ButtonIcon onClick={handleCreate}><CheckIcon /></ButtonIcon>
                                            <ButtonIcon onClick={handleCancel}><ResetIcon /></ButtonIcon>
                                        </StyledDiv>
                                        : 
                                        <Container>
                                            <PrimaryBtn onClick={handleOpen}>New category</PrimaryBtn>
                                        </Container>
                                    }
                    </CreateContainer>
                    
                </ViewPort>

            <ScrollDown >
                <ChevronDownIcon />
            </ScrollDown>
            
            </SelectMenu>
    </Select.Root>
    )

    
}

