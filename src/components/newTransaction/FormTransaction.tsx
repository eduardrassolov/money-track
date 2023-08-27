import { styled } from 'styled-components'
import TYPES_TRANSACTION from '../../config/typeTransactions'
import { FC } from 'react'
import Button from '../../ui/Button';
import Category from '../category/Category';
import { EXPENSE_OPTIONS, INCOME_OPTIONS } from '../../config/category';
import { SubmitHandler, useForm } from 'react-hook-form';
import addTransaction from '../../api/addTransaction';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import { QUERY_KEY } from '../../config/queryClientKeys';
import IInsertTransaction from '../../interface/IInsertTransaction';


const FormGroup = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
    
    label{
        margin-bottom: 0.2rem;
    }
    input{
        font-size: 1rem;
        padding: 0.8rem 1rem;
        border-radius: 7px;
        border: 1px solid #ccc;
        background: #f4f4f4;

        &:focus{
            outline: none;
            border: 1px solid #0284c7;
            background-color: #fff;
            transition: all 0.3s ease-in-out;
        }
    }
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

const TransactionForm: FC<INewTransactionProps> = ({ type }) => {
    const optionsSelect = type === TYPES_TRANSACTION.INCOME ? INCOME_OPTIONS : EXPENSE_OPTIONS;

    const queryClient = useQueryClient();
    const { register, handleSubmit, reset } = useForm<Inputs>();

    const { mutate } = useMutation({
        mutationFn: (newTransaction: IInsertTransaction) => addTransaction(newTransaction),
        onSuccess: () => {
            toast.success('Added successfully');
            queryClient.invalidateQueries({ queryKey: [type === TYPES_TRANSACTION.INCOME ? QUERY_KEY.INCOMES : QUERY_KEY.EXPENSES] });
            reset();
        }
    })

    const onSubmit: SubmitHandler<Inputs> = ({ description, amount, completed_at, category }) => {
        if (!description || !amount || !completed_at || !category)
            return;

        mutate({
            description: description,
            amount: amount,
            completedAt: completed_at.toString(),
            categoryId: category,
        })
    }


    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            {type === TYPES_TRANSACTION.INCOME ?
                <h4>Add new income:</h4> : <h4>Add new expense:</h4>}

            <FormGroup>
                <label htmlFor="description">*Description:</label>
                <input type="text" id="description" placeholder='Enter description' required autoFocus autoComplete="off" {...register("description")} />
            </FormGroup>

            <FormGroup>
                <label htmlFor="category">*Category:</label>
                <Category options={optionsSelect} register={register} />
            </FormGroup>

            <FormGroup>
                <label htmlFor="amount">*Amount:</label>
                <input type="number" id="amount" step={0.01} min={1} placeholder='Enter amount' required autoComplete='off' {...register("amount")} />
            </FormGroup>

            <FormGroup>
                <label htmlFor="completed_at">*Date:</label>
                <input type="datetime-local" id="completed_at" required {...register("completed_at")} />
            </FormGroup>

            <FormFooter>
                <Button variant='secondary' type='reset'>Clear</Button>
                <Button type='submit'>Confirm</Button>
            </FormFooter>
        </form>
    )
}
export default TransactionForm;
