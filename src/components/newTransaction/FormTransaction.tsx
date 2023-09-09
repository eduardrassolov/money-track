import TYPES_TRANSACTION from '../../config/typeTransactions'
import { FC } from 'react'
import Category from '../category/Category';
import { SubmitErrorHandler, SubmitHandler, useForm } from 'react-hook-form';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { QUERY_KEY } from '../../config/queryClientKeys';
import getCategory from '../../services/api/getCategory';
import { PrimaryBtn, SecondaryBtn } from '../../styles/Button';
import { ErrorP, Form, FormFooter, FormGroup } from './FormTransaction.style';
import { Inputs } from '../../types/Inputs.type';
import { useUser } from '../../utils/hooks/useUser';
import useCreateTransaction from './useCreateTransaction';
import useFilter from '../../utils/hooks/useFilter';
import useSort from '../../utils/hooks/useSort';
import { SortBy } from '../../types/sortBy.type';
interface INewTransactionProps {
    type: number;
}

const TransactionForm: FC<INewTransactionProps> = ({ type }) => {
    const { user } = useUser();
    if (!user) {
        return;
    }
    const { id: userId } = user;
    const currency = user.user_metadata.currency as string;
    const { filter } = useFilter();
    const sortBy: SortBy = useSort();
    const queryClient = useQueryClient();

    //TODO remove fetching data for SELECT and put globally
    const { data: optionsList } = useQuery({ queryKey: [QUERY_KEY.CATEGORIES], queryFn: () => getCategory(type) });

    const { register, handleSubmit, reset, formState: { errors } } = useForm<Inputs>();
    const { createTransaction } = useCreateTransaction();

    const onSubmit: SubmitHandler<Inputs> = ({ description, amount, completed_at, category }) => {
        if (!description.trim() || !amount || !completed_at || !category)
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

    return (
        <Form onSubmit={handleSubmit(onSubmit, onError)}>
            {type === TYPES_TRANSACTION.INCOME ? <h4>Add new income:</h4> : <h4>Add new expense:</h4>}

            <FormGroup>
                <label htmlFor="description">Description:</label>
                {errors?.description ? <ErrorP>{errors.description?.message}</ErrorP> : ''}

                <input type="text" id="description" placeholder='Enter description' autoFocus autoComplete="off" {...register("description", {
                    required: '*This field is required',
                })} />
            </FormGroup>

            {optionsList
                ?
                <FormGroup>
                    <label htmlFor="category">Category:</label>
                    <Category options={optionsList} register={register} />
                </FormGroup>
                : ''
            }

            <FormGroup>
                <label htmlFor="amount">Amount:</label>
                {errors?.amount ? <ErrorP>{errors.amount?.message}</ErrorP> : ''}
                <input type="number" id="amount" step={0.01} min={1} placeholder='Enter amount' autoComplete='off' {...register("amount", {
                    required: '*This field is required',
                })} />
            </FormGroup>

            <FormGroup>
                <label htmlFor="completed_at">Date:</label>
                <input type="datetime-local" id="completed_at"  {...register("completed_at", {
                    required: '*This field is required',
                })} />
            </FormGroup>

            <FormFooter>
                <SecondaryBtn type='reset'>Clear</SecondaryBtn>
                <PrimaryBtn type='submit'>Confirm</PrimaryBtn>
            </FormFooter>
        </Form>
    )
}
export default TransactionForm;
