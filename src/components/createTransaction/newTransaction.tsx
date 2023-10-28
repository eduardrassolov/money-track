import { useState } from 'react'
import { useUser } from '../../utils/hooks/useUser';
import NameTransaction from './NameTransaction';
import AmountTransaction from './AmountTransaction';
import CategoryTransaction from './CategoryTransaction';
import CurrenctyTransaction from './CurrenctyTransaction';
import TimeCreatedTransaction from './TimeCreatedTransaction';
import { SubmitHandler, useForm } from 'react-hook-form';

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
import { yupResolver } from '@hookform/resolvers/yup';

import { transactionSchema } from './transactionSchema';
import { ErrorP } from '../newTransaction/FormTransaction.style';
import dayjs from 'dayjs';

const length = 4;

type NewTransaction = {
    description: string,
    currency: string,
    completedAt: string,
    amount: number,
    categoryId: string

}

const StyledContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 0.5rem;
    margin: 1rem 0;
`

const steps = [1, 2, 3, 4, 5];

export default function NewTransaction({ type }: { type: number }) {


    const { user } = useUser();
    const queryClient = useQueryClient();
    const { createTransaction } = useCreateTransaction();
    const { from, to } = useBoundStore(state => state.filterRange);
    const sortBy: SortBy = useSort();
    if (!user) {
        return null;
    }



    const { id: userId } = user;
    const userCurrency = user.user_metadata.currency as string;

    const [newTransaction, setNewTransaction] = useState({
        desciption: "",
        amount: null,
        categoryId: null,
        currencyId: userCurrency,
        userId: userId.
    })

    const [currentStep, setStep] = useState(0);
    const nextStep = () => setStep((prev) => prev === length ? prev : prev + 1);
    const prevStep = () => setStep((prev) => prev === 0 ? prev : prev - 1);

    const { register, handleSubmit, reset, formState: { errors } } = useForm({
        resolver: yupResolver(transactionSchema),
        defaultValues: {
            completedAt: dayjs(new Date()).format("YYYY-MM-DD HH:mm"),
            currency: userCurrency,
        }
    });

    const onSubmit: SubmitHandler<NewTransaction> = ({ description, amount, completedAt, categoryId, currency }) => {
        if (!description.trim() || !amount || !completedAt || !categoryId || !currency) {
            console.log("Empty fields");
            return;
        }

        const key = type === TYPES_TRANSACTION.INCOME ? QUERY_KEY.INCOMES : QUERY_KEY.EXPENSES;

        createTransaction({
            description,
            amount,
            completedAt,
            categoryId,
            profileId: userId,
            currencyId: currency
        }, {
            onSuccess: () => {
                queryClient.invalidateQueries({ queryKey: [userId, key, from, to, sortBy] });
                setStep(() => 0);
                reset();
            }
        })
    };

    return (
        <>
            <TimeLine stepsList={steps} currentStep={currentStep} />

            <form onSubmit={handleSubmit(onSubmit)}>
                {currentStep === 0 ? <NameTransaction register={register} /> : ""}
                {currentStep === 1 ? <AmountTransaction register={register} /> : ""}
                {currentStep === 2 ? <CategoryTransaction type={type} userId={userId} register={register} /> : ""}
                {currentStep === 3 ? <CurrenctyTransaction register={register} /> : ""}
                {currentStep === 4 ? <TimeCreatedTransaction register={register} /> : ""}

                <StyledContainer>
                    {!currentStep
                        ?
                        ""
                        :
                        <HiOutlineArrowLeftCircle onClick={prevStep} size={"2.4rem"} cursor={"pointer"} />
                    }

                    {currentStep === length
                        ?
                        <PrimaryBtn type="submit">Submit</PrimaryBtn>
                        :
                        <HiArrowRightCircle onClick={nextStep} size={"2.4rem"} cursor={"pointer"} color={"#7286D3"} />
                    }
                </StyledContainer>

                <div>
                    <ErrorP>{errors?.amount?.message}</ErrorP>
                    <ErrorP>{errors?.categoryId?.message}</ErrorP>
                    <ErrorP>{errors?.description?.message}</ErrorP>
                </div>
            </form >
        </>
    )
}
