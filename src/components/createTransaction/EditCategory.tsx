import React, { useState } from 'react'
import { HiOutlineCheckCircle, HiOutlineMinusCircle } from 'react-icons/hi2'
import { StyledInput } from '../input/Input'
import apiEditCategory from '../../services/api/apiEditCategory';
import { toast } from 'react-toastify';
import { QUERY_KEY } from '../../config/queryClientKeys';
import { useMutation } from '@tanstack/react-query';
import { queryClient } from '../../main';
import styled from 'styled-components';

export const InputWithError = styled(StyledInput) <{ $isError: boolean }>`
    border: 1px solid ${props => props.$isError ? props.theme.error : ""};
`

interface IEditCategory {
    categoryId: string,
    currentName: string,
    onClose: () => void
}

export default function EditCategory({ categoryId, currentName, onClose }: IEditCategory) {
    const [newCategoryName, setCategoryName] = useState<string>(currentName);
    const [err, setError] = useState(false);

    const handleCategoryName = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { target: { value } } = e;
        setCategoryName(() => value);
    }
    const { mutate: editCategory } = useMutation({
        mutationFn: apiEditCategory,
        onSuccess: () => queryClient.invalidateQueries([QUERY_KEY.USER_CATEGORIES]).then(() => onClose()),
        onError: (err) => {
            if (err instanceof Error) {
                toast.error(err?.message || "Something goes wrong!");
            }
        }
    });

    const handleCreate = () => {
        setError(() => false);
        console.log(newCategoryName);
        if (!newCategoryName.trim().length) {
            setError(() => true);
            return;
        }
        editCategory({ id: categoryId, newName: newCategoryName });
    }

    return (
        <>
            <HiOutlineCheckCircle cursor={"pointer"} size={"1.3rem"} onClick={handleCreate} />
            <HiOutlineMinusCircle cursor={"pointer"} size={"1.3rem"} onClick={onClose} />
            <InputWithError $isError={err} autoFocus value={newCategoryName} onChange={handleCategoryName} />
        </>
    )
}
