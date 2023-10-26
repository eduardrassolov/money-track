import React, { useState } from 'react'
import TYPES_TRANSACTION from '../../config/typeTransactions';
import { QUERY_KEY } from '../../config/queryClientKeys';
import { useQuery } from '@tanstack/react-query';
import { apiGetCategories, apiGetUserCategory } from '../../services/api/apiGetCategory';
import styled from 'styled-components';
import LoadingUi from '../spinner/LoadingUi';
import { StyledDescriptions, TitleText } from './NameTransaction';

const StyledDIv = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.1rem;
`

const StyledDiv = styled.div<{ $isSelected: boolean }>`
    cursor: pointer;
    padding: 0.5rem 0 0.5rem 1rem;
    border-radius: 7px;
    background: ${props => props.$isSelected ? props.theme.colorLogoMain : ""};

    &:hover{
        background: ${props => props.theme.colorLogoMain};
        color: #fff;
    }
`
const Descriptions = styled(StyledDescriptions)`
    gap: 1.5rem;
`
const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.3rem;
`
const Text = styled(TitleText)`
    color: gray;
`

export default function CategoryTransaction({ type, userId, register }) {

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

    const [checkedId, setChecked] = useState("");
    const handleCheckedId = (e) => setChecked(() => e.target.id);

    return (
        <Descriptions>
            <TitleText>Choose category transaction:</TitleText>

            <Container>
                <Text>Custom category</Text>
                {isCustomOptionsLoading ? <LoadingUi /> :
                    <StyledDIv>
                        {userCategory?.map(category =>
                            <StyledDiv key={category.id} $isSelected={checkedId === category.id} >
                                <input type="radio" value={category.id} id={category.id} {...register("categoryId")} onChange={handleCheckedId} />
                                <label htmlFor={category.id}>{category.name}</label>
                            </StyledDiv>)}
                    </StyledDIv>
                }
            </Container>

            <Container>
                <Text>Default category</Text>
                {isOptionsLoading ? <LoadingUi /> :
                    <StyledDIv>
                        {optionsList?.map(category =>
                            <StyledDiv key={category.id} $isSelected={checkedId === category.id} >
                                <input type="radio" value={category.id} id={category.id} {...register("categoryId")} onChange={handleCheckedId} />
                                <label htmlFor={category.id}>{category.name}</label>
                            </StyledDiv>)}
                    </StyledDIv>
                }
            </Container>
        </Descriptions>)
}
