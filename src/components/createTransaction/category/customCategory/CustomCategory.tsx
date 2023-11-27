import { useState } from "react";
import { toast } from "react-toastify";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { QUERY_KEY } from "../../../../config/queryClientKeys";
import apiCreateCategory from "../../../../services/api/apiCreateCategory";
import { useUser } from "../../../../utils/hooks/useUser";
import { InputWithError } from "../editCustomCategory/EditCategory";
import { PrimaryBtn, SecondaryBtn } from "../../../../styles/Button.style";
import { StyledContainer } from "./CustomCategory.style";
import { StyledDiv } from "../CategoryTransaction.style";

interface ICustomCategory {
    isOpen: boolean;
    type: number;
    onChange: () => void;
}

export default function CustomCategory({ isOpen, onChange, type }: ICustomCategory) {
    const { user } = useUser();

    if (!user) {
        return;
    }
    const { id: userId } = user;
    const queryClient = useQueryClient();

    const [categoryName, setCategoryName] = useState("");
    const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {
            target: { value },
        } = e;
        setCategoryName(() => value);
    };

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
        },
    });
    const [isError, setError] = useState(false);

    function handleCreate() {
        setError(() => false);
        if (!categoryName.trim()) {
            setError(() => true);
            return null;
        }
        addCategory({ user_id: userId, name: categoryName, type_id: type });
    }

    return (
        <>
            {isOpen ? (
                <StyledContainer>
                    <InputWithError
                        $isError={isError}
                        type="text"
                        autoFocus
                        value={categoryName}
                        onChange={handleChangeName}
                        placeholder={"Enter new name category"}
                    />
                    <StyledDiv>
                        <SecondaryBtn onClick={onChange}>Cancel</SecondaryBtn>
                        <PrimaryBtn onClick={handleCreate}>Add</PrimaryBtn>
                    </StyledDiv>
                </StyledContainer>
            ) : (
                ""
            )}
        </>
    );
}
