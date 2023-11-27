
import { toast } from 'react-toastify';
import { useState } from 'react';
import { useMutation, useQuery } from '@tanstack/react-query';
import { HiOutlinePlusCircle, HiOutlineTrash, HiPencilSquare } from 'react-icons/hi2';

import TYPES_TRANSACTION from '../../../config/typeTransactions';
import { QUERY_KEY } from '../../../config/queryClientKeys';
import { apiGetCategories, apiGetUserCategory } from '../../../services/api/apiGetCategory';

import LoadingUi from '../../spinner/LoadingUi';
import { TransactionProp } from '../useNewTransaction';
import CustomCategory from './customCategory/CustomCategory';
import apiDeleteCategory from '../../../services/api/apiDeleteCategory';
import { queryClient } from '../../../main';
import EditCategory from './editCustomCategory/EditCategory';
import { Container, CustomCategoryText, Descriptions, StyledDIv, StyledDiv, StyledTitle, Text } from './CategoryTransaction.style';
import { TitleText } from '../nameTransaction/NameTransaction.style';


type CategoryTransactionProps = TransactionProp & {
    categoryId: string,
    type: number,
    userId: string,
}

export default function CategoryTransaction({ categoryId, onChange, type, userId }: CategoryTransactionProps) {

    const { data: optionsList, isLoading: isOptionsLoading } = useQuery(
        {
            queryKey: [QUERY_KEY.CATEGORIES, type === TYPES_TRANSACTION.EXPENSE ? QUERY_KEY.EXPENSES : QUERY_KEY.INCOMES],
            queryFn: () => apiGetCategories(type)
        });
    const { data: userCategory, isLoading: isCustomOptionsLoading } = useQuery(
        {
            queryKey: [QUERY_KEY.USER_CATEGORIES, type === TYPES_TRANSACTION.EXPENSE ? QUERY_KEY.EXPENSES : QUERY_KEY.INCOMES],
            queryFn: () => apiGetUserCategory(type, userId)
        });

    const { mutate: deleteCategory } = useMutation({
        mutationFn: apiDeleteCategory,
        onSuccess: () => queryClient.invalidateQueries([QUERY_KEY.USER_CATEGORIES]),
        onError: (err) => {
            if (err instanceof Error) {
                toast.error(err?.message || "Something goes wrong!");
            }
        }
    })

    const [editModeId, setEditMode] = useState("");
    const handleEditMode = (id: string) => setEditMode(id);

    const [isOpen, setOpen] = useState(false);
    const handleOpen = () => {
        setOpen(prev => !prev);
    }

    return (
        <Descriptions>
            <TitleText>Choose category of transaction:</TitleText>

            <Container>
                <Text>Default category: </Text>
                {isOptionsLoading ?
                    <LoadingUi />
                    :
                    <StyledDIv>
                        {optionsList?.map(category =>
                            <StyledDiv key={category.id} >
                                <CustomCategoryText $isSelected={categoryId === category.id} onClick={() => onChange("categoryId", category.id)}>{category.name}</CustomCategoryText>
                            </StyledDiv>)}
                    </StyledDIv>
                }
            </Container>

            <Container>
                <StyledTitle>
                    <Text>Custom category: </Text>
                    <HiOutlinePlusCircle size={"1.5rem"} cursor={"pointer"} onClick={handleOpen} />
                </StyledTitle>

                <CustomCategory isOpen={isOpen} onChange={handleOpen} type={type} />
                {isCustomOptionsLoading ?
                    <LoadingUi />
                    :
                    <StyledDIv>
                        {userCategory?.map(category =>
                            <StyledDiv key={category.id} >

                                {editModeId === category.id ?
                                    <EditCategory
                                        categoryId={category.id}
                                        currentName={category.name}
                                        onClose={() => handleEditMode("")} />
                                    :
                                    <>
                                        <HiPencilSquare cursor={"pointer"} onClick={() => handleEditMode(category.id)} />
                                        <HiOutlineTrash cursor={"pointer"} onClick={() => deleteCategory(category.id)} />
                                        <CustomCategoryText $isSelected={categoryId === category.id} onClick={() => onChange("categoryId", category.id)}>{category.name}</CustomCategoryText>
                                    </>
                                }
                            </StyledDiv>)}
                    </StyledDIv>
                }
            </Container>


        </Descriptions >)
}
