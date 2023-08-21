import { styled } from 'styled-components'
import Button from '../../ui/button'
import createTransaction from '../../services/createTransaction'
import TYPES_TRANSACTION from '../../config/typeTransactions'
import { useState } from 'react'

const Form = styled.form`
    display: flex;
    flex-direction: column;
    padding: 1rem;
    border: 1px solid #ccc;
    border-radius: 7px;

    h4{
        margin: 0 auto 1rem 0;
        font-size: 1.1rem;
    }
`
const FormGroup = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
    
    label{
        margin-bottom: 0.2rem;
    }
    input{
        font-size: 0.9rem;
        padding: 0.5rem;
        border-radius: 7px;
        border: 1px solid #ccc;
    }
`
const FormFooter = styled.div`
    display: flex;
    justify-content: flex-end;
    gap: 0.5rem;
`

export default function NewExpense() {
    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData.entries());
        createTransaction({ ...data, type_id: TYPES_TRANSACTION.EXPENSE });

        e.currentTarget.reset();
    }
    return (
        <Form onSubmit={handleSubmit}>
            <h4>Add new expense:</h4>

            <FormGroup>
                <label htmlFor="description">Description:</label>
                <input type="text" id="description" name="description" placeholder='Enter description' required />
            </FormGroup>

            <FormGroup>
                <label htmlFor="amount">Amount:</label>
                <input type="number" id="amount" name="amount" min={1} placeholder='Enter amount' required />
            </FormGroup>

            <FormGroup>
                <label htmlFor="completed_at">Date:</label>
                <input type="datetime-local" id="completed_at" name="completed_at" required />
            </FormGroup>

            <FormFooter>
                <Button variant='secondary' type='reset'>Clear</Button>
                <Button type='submit'>Confirm</Button>
            </FormFooter>
        </Form>
    )
}
