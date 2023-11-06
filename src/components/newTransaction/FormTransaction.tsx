import { FC, useState } from 'react';
import { SubmitErrorHandler, SubmitHandler, useForm } from 'react-hook-form';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { yupResolver } from '@hookform/resolvers/yup';

import Select from '../dropDown/Select';
import Input from '../input/Input';
import FormRow from './FormRow';

import TYPES_TRANSACTION from '../../config/typeTransactions'

import { QUERY_KEY } from '../../config/queryClientKeys';
import { Form, FormFooter } from './FormTransaction.style';
import { Inputs } from '../../types/Inputs.type';
import { useUser } from '../../utils/hooks/useUser';
import useCreateTransaction from './useCreateTransaction';
import useFilter from '../../utils/hooks/useFilter';
import useSort from '../../utils/hooks/useSort';
import { SortBy } from '../../types/sortBy.type';
import apiGetCurrency from '../../services/api/apiGetCurrency';

import { formatDateToInput } from '../../utils/helpers/formatDateToInput';
import LoadingUi from '../spinner/LoadingUi';
import { newTransactionSchema } from './newTrasactionValidation';
import DropDown from '../dropDown/DropDown';
import { apiGetCategories, apiGetUserCategory } from '../../services/api/apiGetCategory';
import ErrorLabel from '../error/ErrorLabel';
import { PrimaryBtn, SecondaryBtn } from '../../styles/Button.style';
interface INewTransactionProps {
    type: number;
}

const TransactionForm: FC<INewTransactionProps> = ({ type }) => {
    const { user } = useUser();
    const queryClient = useQueryClient();
    const { filter } = useFilter();
    const sortBy: SortBy = useSort();
    const { createTransaction } = useCreateTransaction();
    const { register, handleSubmit, reset, formState: { errors } } = useForm({ resolver: yupResolver(newTransactionSchema) });
    const [category, setCategory] = useState("");

    if (!user) {
        return null;
    }

    const { id: userId } = user;
    const userCurrency = user.user_metadata.currency as string;

    //TODO remove fetching data for SELECT and put globally
    const { data: optionsList, isLoading: isOptionsLoading } = useQuery(
        {
            queryKey: [QUERY_KEY.CATEGORIES, type === TYPES_TRANSACTION.EXPENSE ? QUERY_KEY.EXPENSES : QUERY_KEY.INCOMES],
            queryFn: () => apiGetCategories(type)
        });
    const { data: userCategory } = useQuery(
        {
            queryKey: [QUERY_KEY.USER_CATEGORIES, type === TYPES_TRANSACTION.EXPENSE ? QUERY_KEY.EXPENSES : QUERY_KEY.INCOMES],
            queryFn: () => apiGetUserCategory(type, userId)
        });

    const { data: optionCurrency, isLoading: isCurrencyLoading } = useQuery({ queryKey: ["currency"], queryFn: apiGetCurrency });

    //TODO fix any
    const onSubmit: SubmitHandler<any> = ({ description, amount, completed_at, currency }) => {

        if (!description.trim() || !amount || !completed_at || !category || !currency) {
            console.log("Empty fields");
            return;
        }
        const key = type === TYPES_TRANSACTION.INCOME ? QUERY_KEY.INCOMES : QUERY_KEY.EXPENSES;

        createTransaction({
            description,
            amount,
            completedAt: completed_at,
            categoryId: category,
            profileId: userId,
            currencyId: currency
        }, {
            onSuccess: () => {
                queryClient.invalidateQueries({ queryKey: [userId, key, filter, sortBy] });
                setCategory("");
                reset();
            }
        })
    }
    const onError: SubmitErrorHandler<Inputs> = (error) => console.log(error);

    const transactionType = type === TYPES_TRANSACTION.INCOME ? "income" : "expense"
    const formatedTime = formatDateToInput(new Date());

    return (
        <>
            {isOptionsLoading && isCurrencyLoading ?
                <LoadingUi />
                :
                <Form onSubmit={handleSubmit(onSubmit, onError)}>
                    <h3>Add new {transactionType}</h3>

                    <FormRow lblFor={"description"} lblText={"Description"}>
                        <Input type={"text"} id={"description"} name={"description"} placeHolder={`Enter name of ${transactionType}`} autoFocus={true} register={register} />
                        <ErrorLabel errMsg={errors.description?.message} />
                    </FormRow>

                    {optionsList
                        ?
                        <FormRow lblFor={"category"} lblText={"Category"}>
                            <DropDown
                                defaultOption={optionsList}
                                customOption={userCategory}
                                selected={category}
                                onSelect={setCategory}
                                currentTypeTransaction={type} />
                            <ErrorLabel />
                        </FormRow>
                        : ''
                    }

                    <FormRow lblFor="amount" lblText={"Amount"}>
                        <Input type={"number"} name={"amount"} placeHolder={"0,00"} register={register} />
                        <ErrorLabel errMsg={errors.amount?.message} />
                    </FormRow>

                    <FormRow lblFor={"currency"} lblText={"Currency"}>
                        <Select options={optionCurrency} register={register} name={"currency"} selectedDefault={userCurrency}></Select>
                        <ErrorLabel />
                    </FormRow>

                    <FormRow lblFor={"completed_at"} lblText={"Date"}>
                        <Input type={"datetime-local"} name={"completed_at"} register={register} defaultValue={formatedTime} />
                        <ErrorLabel errMsg={errors.completed_at?.message} />
                    </FormRow>

                    <FormFooter>
                        <SecondaryBtn type="reset">Clear</SecondaryBtn>
                        <PrimaryBtn type="submit">Confirm</PrimaryBtn>
                    </FormFooter>
                </Form >
            }

        </>
    )
}
export default TransactionForm;
