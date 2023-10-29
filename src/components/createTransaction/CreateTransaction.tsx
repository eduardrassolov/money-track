import { useState } from 'react'
import { useUser } from '../../utils/hooks/useUser';
import { PrimaryBtn } from '../../styles/Button';
import styled from 'styled-components';
import { HiArrowRightCircle, HiOutlineArrowLeftCircle } from 'react-icons/hi2';
import TYPES_TRANSACTION from '../../config/typeTransactions';
import { QUERY_KEY } from '../../config/queryClientKeys';
import useCreateTransaction from '../newTransaction/useCreateTransaction';
import { useQueryClient } from '@tanstack/react-query';

import useSort from '../../utils/hooks/useSort';
import { SortBy } from '../../types/sortBy.type';
import { useBoundStore } from '../../store/store';
import TimeLine from './TimeLine';
import useNewTransaction from './useNewTransaction';

const StyledContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 0.5rem;
    margin: 1rem 0;
`

export default function CreateNewTransaction({ type }: { type: number }) {
    const { user } = useUser();
    const queryClient = useQueryClient();
    const { createTransaction } = useCreateTransaction();
    const sortBy: SortBy = useSort();
    const { from, to } = useBoundStore(state => state.filterRange);

    if (!user) {
        return null;
    }
    const { id: userId } = user;
    const userCurrency = user?.user_metadata.currency as string;

    const key = type === TYPES_TRANSACTION.INCOME ? QUERY_KEY.INCOMES : QUERY_KEY.EXPENSES;

    const { transaction, transactionDataArr, reset } = useNewTransaction(user);

    const [currentStep, setStep] = useState(0);
    const nextStep = () => setStep((prev) => prev === transactionDataArr.length ? prev : prev + 1);
    const prevStep = () => setStep((prev) => !prev ? prev : prev - 1);

    function createNewTransaction() {
        const { description, amount, categoryId, currencyId, timeCompleted } = transaction;
        if (!description || !amount || !categoryId || !currencyId || !timeCompleted) {
            return null;
        }

        createTransaction({
            description,
            amount,
            completedAt: timeCompleted,
            categoryId,
            profileId: userId,
            currencyId: userCurrency
        }, {
            onSuccess: () => {
                queryClient.invalidateQueries({ queryKey: [userId, key, from, to, sortBy] });
                setStep(() => 0);
                reset();
            }
        })
    }

    return (
        <>
            <TimeLine maxLength={transactionDataArr.length} currentStep={currentStep} />

            {transactionDataArr[currentStep]}

            <StyledContainer>
                <HiOutlineArrowLeftCircle onClick={prevStep} size={"2.4rem"} cursor={"pointer"} />

                {currentStep === transactionDataArr.length - 1 ?
                    <PrimaryBtn onClick={createNewTransaction}>Create</PrimaryBtn>
                    :
                    <HiArrowRightCircle onClick={nextStep} size={"2.4rem"} cursor={"pointer"} color={"#7286D3"} />}

            </StyledContainer>
        </>
    )
}