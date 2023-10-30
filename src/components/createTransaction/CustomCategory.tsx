import { useState } from 'react'
import { StyledInput } from '../input/Input';
import { QUERY_KEY } from '../../config/queryClientKeys';
import { toast } from 'react-toastify';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import apiCreateCategory from '../../services/api/apiCreateCategory';
import { useUser } from '../../utils/hooks/useUser';
import { HiPlus } from 'react-icons/hi2';
import { PrimaryBtn, SecondaryBtn } from '../../styles/Button';
import styled from 'styled-components';

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

export default function CustomCategory({ isOpen, onChange }) {
    const { user } = useUser();

    const queryClient = useQueryClient();

    // const reset = () => setCategoryName(() => "");

    const [categoryName, setCategoryName] = useState("");
    const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { target: { value } } = e;
        setCategoryName(() => value);
    }

    function handleCreate() {
        console.log(categoryName);
        addCategory({ user_id: user?.id, name: categoryName, type_id: 1 });
    }

    const { mutate: addCategory } = useMutation({
        mutationFn: apiCreateCategory,
        onSuccess: () => {
            queryClient.invalidateQueries([QUERY_KEY.USER_CATEGORIES]);
            onChange();
        }
    });

    return (
        <>
            {
                isOpen ?
                    <StyledContainer>
                        <StyledInput type="text" autoFocus value={categoryName} onChange={handleChangeName} placeholder={"Enter new name category"} />
                        <StyledDiv>
                            <SecondaryBtn onClick={onChange}>cancel</SecondaryBtn>
                            <PrimaryBtn onClick={handleCreate}>add</PrimaryBtn>
                        </StyledDiv>
                    </StyledContainer >
                    :
                    // <button onClick={handleOpen}>+</button>
                    ""
            }
        </>
    )
}
