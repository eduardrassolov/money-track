import TYPES_TRANSACTION from '../../config/typeTransactions'
import { FC } from 'react'
import { SubmitErrorHandler, SubmitHandler, useForm } from 'react-hook-form';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { QUERY_KEY } from '../../config/queryClientKeys';

import { PrimaryBtn, SecondaryBtn } from '../../styles/Button';
import { ErrorP, Form, FormFooter, FormGroup } from './FormTransaction.style';
import { Inputs } from '../../types/Inputs.type';
import { useUser } from '../../utils/hooks/useUser';
import useCreateTransaction from './useCreateTransaction';
import useFilter from '../../utils/hooks/useFilter';
import useSort from '../../utils/hooks/useSort';
import { SortBy } from '../../types/sortBy.type';

import apiGetCurrency from '../../services/api/apiGetCurrency';
import Input from '../input/Input';
import Select from '../dropDown/Select';
import apiGetCategory from '../../services/api/apiGetCategory';
import FormRow from './FormRow';
interface INewTransactionProps {
    type: number;
}

const TransactionForm: FC<INewTransactionProps> = ({ type }) => {
    const queryClient = useQueryClient();
    const { user } = useUser();
    const { filter } = useFilter();
    const sortBy: SortBy = useSort();
    const { register, handleSubmit, reset, formState: { errors } } = useForm<Inputs>();

    if (!user) {
        return;
    }
    const { id: userId } = user;
    const userCurrency = user.user_metadata.currency as string;

    //TODO remove fetching data for SELECT and put globally
    const { data: optionsList } = useQuery({ queryKey: [QUERY_KEY.CATEGORIES], queryFn: () => apiGetCategory(type) });

    const { createTransaction } = useCreateTransaction();

    const { data: optionCurrency } = useQuery({ queryKey: ["currency"], queryFn: () => apiGetCurrency() });
    const onSubmit: SubmitHandler<Inputs> = ({ description, amount, completed_at, category, currency }) => {
        if (!description.trim() || !amount || !completed_at || !category || !currency)
            return;

        const key = type === TYPES_TRANSACTION.INCOME ? QUERY_KEY.INCOMES : QUERY_KEY.EXPENSES;

        createTransaction({
            description,
            amount,
            completedAt: completed_at.toString(),
            categoryId: category,
            profileId: userId,
            currencyId: currency
        }, {
            onSuccess: () => {
                console.log('success');
                queryClient.invalidateQueries({ queryKey: [userId, key, filter, sortBy] });
                reset();
            }
        })
    }
    const onError: SubmitErrorHandler<Inputs> = (error) => console.log(error);

    if (!optionCurrency)
        return;

    const transactionType = type === TYPES_TRANSACTION.INCOME ? "income" : "expense:"

    return (
        <Form onSubmit={handleSubmit(onSubmit, onError)}>
            <h3>Add new {transactionType}</h3>

            <FormRow lblFor={"description"} lblText={"Description"}>
                <Input type={"text"} id={"description"} name={"description"} placeHolder={`Enter name of ${transactionType}`} autoFocus={true} register={register} />
            </FormRow>

            {optionsList
                ?
                <FormRow lblFor={"category"} lblText={"Category"}>
                    <Select options={optionsList} register={register} name={"category"}></Select>
                </FormRow>
                : ''
            }

            <FormRow lblFor="amount" lblText={"Amount"}>
                <Input type={"number"} name={"amount"} placeHolder={"0,00"} register={register} />
            </FormRow>

            <FormRow lblFor={"currency"} lblText={"Currency"}>
                <Select options={optionCurrency} register={register} name={"currency"} selectedDefault={userCurrency}></Select>
            </FormRow>

            <FormRow lblFor={"completed_at"} lblText={"Date"}>
                <Input type={"datetime-local"} name={"completed_at"} register={register} />
            </FormRow>

            <FormFooter>
                <SecondaryBtn type="reset">Clear</SecondaryBtn>
                <PrimaryBtn type="submit">Confirm</PrimaryBtn>
            </FormFooter>
        </Form >
    )
}
export default TransactionForm;
