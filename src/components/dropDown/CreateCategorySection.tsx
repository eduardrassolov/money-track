
import { useQueryClient } from '@tanstack/react-query';
import { CheckIcon, ResetIcon } from '@radix-ui/react-icons';
import { useState } from 'react';

import { StyledInput } from '../input/Input.tsx';
import { PrimaryBtn } from '../../styles/Button.tsx';
import { useUser } from '../../utils/hooks/useUser.tsx';
import { ButtonIcon, Container, CreateContainer, StyledDiv } from './DropDown.style.ts';
import useCategorySelect from './useCategorySelect.ts'
import { QUERY_KEY } from '../../config/queryClientKeys.ts';
import { toast } from 'react-toastify';

export default function CreateCategorySection({ type_id }: { type_id: number }) {
    const { isCreateMode, addCategory, clear, openCloseCreateMode } = useCategorySelect();
    const queryClient = useQueryClient();
    const { user } = useUser();

    if (!user) {
        return null;
    }
    const { id: userId } = user;

    const [categoryName, setCategoryName] = useState("");

    function handleCreate(e: React.MouseEvent<HTMLButtonElement>) {
        e.preventDefault();
        addCategory({ user_id: userId, name: categoryName, type_id }, {
            onSuccess: () => queryClient.invalidateQueries([QUERY_KEY.USER_CATEGORIES]),
            onError: (err: unknown) => {
                if (err instanceof Error)
                    return toast.error(err.message)
            }
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
