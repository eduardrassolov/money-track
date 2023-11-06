import { useState } from 'react'
import { QUERY_KEY } from '../../config/queryClientKeys';

import { useMutation, useQueryClient } from '@tanstack/react-query';
import apiCreateCategory from '../../services/api/apiCreateCategory';
import { useUser } from '../../utils/hooks/useUser';


import styled from 'styled-components';
import { InputWithError } from './EditCategory';
import { toast } from 'react-toastify';
import { PrimaryBtn, SecondaryBtn } from '../../styles/Button.style';

const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
`

const StyledDiv = styled.div`
    display: flex;
    gap: 0.5rem;
    margin: 0 0 2rem;
`

interface ICustomCategory {
    isOpen: boolean,
    onChange: () => void
}

export default function CustomCategory({ isOpen, onChange }: ICustomCategory) {
    const { user } = useUser();

    if (!user) {
        return;
    }
    const { id: userId } = user;
    const queryClient = useQueryClient();

    const [categoryName, setCategoryName] = useState("");
    const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { target: { value } } = e;
        setCategoryName(() => value);
    }

    const { mutate: addCategory } = useMutation({
        mutationFn: apiCreateCategory,
        onSuccess: () => {
            queryClient.invalidateQueries([QUERY_KEY.USER_CATEGORIES]);
            onChange();
        },
        onError: (err) => {
            if (err instanceof Error) {
                setError(() => true);
                toast.error(err?.message || "Something goes wrong!");
            }
        }
    });
    const [isError, setError] = useState(false);

    function handleCreate() {
        setError(() => false);
        if (!categoryName.trim()) {
            setError(() => true);
            return null;
        }
        addCategory({ user_id: userId, name: categoryName, type_id: 1 });
    }

    return (
        <>
            {
                isOpen ?
                    <StyledContainer>
                        <InputWithError $isError={isError} type="text" autoFocus value={categoryName} onChange={handleChangeName} placeholder={"Enter new name category"} />
                        <StyledDiv>
                            <SecondaryBtn onClick={onChange}>Cancel</SecondaryBtn>
                            <PrimaryBtn onClick={handleCreate}>Add</PrimaryBtn>
                        </StyledDiv>
                    </StyledContainer >
                    :
                    ""
            }
        </>
    )
}
