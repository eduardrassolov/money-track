import React, { ChangeEvent, useState } from 'react'
import { HiOutlineCheckCircle, HiOutlineMinusCircle } from 'react-icons/hi2'
import { StyledInput } from '../input/Input'
import apiEditCategory from '../../services/api/apiEditCategory';
import { toast } from 'react-toastify';
import { QUERY_KEY } from '../../config/queryClientKeys';
import { useMutation } from '@tanstack/react-query';
import { queryClient } from '../../main';

export default function EditCategory({ categoryId, currentName, onClose }) {
    const [newCategoryName, setCategoryName] = useState(currentName);
    const handleCategoryName = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { target: { value } } = e;
        setCategoryName(() => value);
    }
    const { mutate: editCategory } = useMutation({
        mutationFn: apiEditCategory,
        onSuccess: () => queryClient.invalidateQueries([QUERY_KEY.USER_CATEGORIES]).then(() => onClose()),
        onError: (err) => toast.error(err?.message || "Something goes wrong!")
    });

    const handleCreate = () => {
        console.log(newCategoryName);
        editCategory({ id: categoryId, newName: newCategoryName });
    }

    return (
        <>
            <HiOutlineCheckCircle cursor={"pointer"} size={"1.3rem"} onClick={handleCreate} />
            <HiOutlineMinusCircle cursor={"pointer"} size={"1.3rem"} onClick={onClose} />
            <StyledInput autoFocus value={newCategoryName} onChange={handleCategoryName} />
        </>
    )
}
