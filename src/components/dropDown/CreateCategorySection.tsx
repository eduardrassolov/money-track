
import { useQueryClient } from '@tanstack/react-query';
import { PrimaryBtn } from '../../styles/Button';
import { StyledInput } from '../input/Input';
import { ButtonIcon, Container, CreateContainer, StyledDiv } from './DropDown.style'
import useCategorySelect from './useCategorySelect'
import { useUser } from '../../utils/hooks/useUser';
import { useState } from 'react';
import { QUERY_KEY } from '../../config/queryClientKeys';
import { CheckIcon, ResetIcon } from '@radix-ui/react-icons';

export default function CreateCategorySection({ type_id }: { type_id: number }) {
    const { isCreateMode, addCategory, clear, openCloseCreateMode } = useCategorySelect();
    const queryClient = useQueryClient();
    const { user } = useUser();

    const [categoryName, setCategoryName] = useState("");

    function handleCreate(e: React.MouseEvent<HTMLButtonElement>) {
        e.preventDefault();
        addCategory({ user_id: user?.id, name: categoryName, type_id }, {
            onSuccess: () => queryClient.invalidateQueries([QUERY_KEY.USER_CATEGORIES])
        });
    }
    function handleCancel(e: React.MouseEvent<HTMLButtonElement>) {
        e.preventDefault();
        clear();
    }
    function handleOpen() {
        openCloseCreateMode();
    }
    const handleCategoryName = (e: React.ChangeEvent<HTMLInputElement>) => setCategoryName(() => e.target.value);

    return (
        <CreateContainer>
            {isCreateMode
                ?
                <StyledDiv>
                    <StyledInput placeholder="Enter new category" value={categoryName} onInput={handleCategoryName} autoFocus />

                    <ButtonIcon onClick={handleCreate}><CheckIcon /></ButtonIcon>
                    <ButtonIcon onClick={handleCancel}><ResetIcon /></ButtonIcon>
                </StyledDiv>
                :
                <Container>
                    <PrimaryBtn onClick={handleOpen}>New category</PrimaryBtn>
                </Container>
            }
        </CreateContainer>
    )
}
