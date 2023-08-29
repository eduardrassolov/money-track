import { styled } from 'styled-components'
import TYPES_TRANSACTION from '../../config/typeTransactions'
import { FC, memo } from 'react'
import Button from '../../ui/Button';
import Category from '../category/Category';
import { SubmitErrorHandler, SubmitHandler, useForm } from 'react-hook-form';
import createTransaction from '../../api/createTransaction';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import { QUERY_KEY } from '../../config/queryClientKeys';
import IInsertTransaction from '../../interface/IInsertTransaction';
import getCategory from '../../api/getCategory';

const Form = styled.form`
    border: 1px solid #ccc;
    border-radius: 7px;
    padding: 1rem 2rem;
`

const FormGroup = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 2rem;
    
    label{
        margin-bottom: 0.5rem;
    }
    input{
        font-size: 1rem;
        padding: 0.8rem 1rem;
        border-radius: 7px;
        border: 1px solid transparent;
        background: #f4f4f4;

        &:focus{
            outline: none;
            border: 1px solid #0284c7;
            background-color: #fff;
            transition: all 0.3s ease-in-out;
        }
    }
`
const ErrorP = styled.p`
    font-size: 0.7rem;
    color: red;
    margin: 0 0 0.5rem;
`
const FormFooter = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-top: 1.2rem;
    gap: 0.5rem;
`

interface INewTransactionProps {
    type: number;
}

export type Inputs = {
    description: string;
    category: number;
    amount: number,
    completed_at: Date,
}

const TransactionForm: FC<INewTransactionProps> = memo(function ({ type }) {
    const queryClient = useQueryClient();

    //TODO remove fetching data for SELECT and put globally
    const { data: optionsList } = useQuery({ queryKey: ['categories'], queryFn: () => getCategory(type) });

    const { register, handleSubmit, reset, formState: { errors } } = useForm<Inputs>();

    const { mutate } = useMutation({
        mutationFn: (newTransaction: IInsertTransaction) => createTransaction(newTransaction),
        onSuccess: () => {
            toast.success('Added successfully');
            queryClient.invalidateQueries({ queryKey: [type === TYPES_TRANSACTION.INCOME ? QUERY_KEY.INCOMES : QUERY_KEY.EXPENSES] });
            reset();
        }
    })

    const onSubmit: SubmitHandler<Inputs> = ({ description, amount, completed_at, category }) => {
        if (!description.trim() || !amount || !completed_at || !category)
            return;

        mutate({
            description: description,
            amount: amount,
            completedAt: completed_at.toString(),
            categoryId: category,
        })
    }
    const onError: SubmitErrorHandler<Inputs> = (error) => {
        console.log(error);
    }


    return (
        <Form onSubmit={handleSubmit(onSubmit, onError)}>
            {type === TYPES_TRANSACTION.INCOME ?
                <h4>Add new income:</h4> : <h4>Add new expense:</h4>}

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
                <Button variant='secondary' type='reset'>Clear</Button>
                <Button type='submit'>Confirm</Button>
            </FormFooter>
        </Form>
    )
})
export default TransactionForm;
