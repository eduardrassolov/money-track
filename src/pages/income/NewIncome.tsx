import { styled } from 'styled-components'
import Button from '../../ui/button'
import createTransaction from '../../services/createTransaction'
import TYPES_TRANSACTION from '../../config/typeTransactions'

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

export default function NewIncome() {
    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData.entries());
        createTransaction({ ...data, type_id: TYPES_TRANSACTION.INCOME });

        e.currentTarget.reset();
    }
    return (
        <Form onSubmit={handleSubmit}>
            <h4>Add new income:</h4>

            <FormGroup>
                <label htmlFor="description">Description:</label>
                <input type="text" id="description" name="description" placeholder='Enter description' />
            </FormGroup>

            <FormGroup>
                <label htmlFor="income">Amount:</label>
                <input type="number" id="amount" name="amount" min={1} placeholder='Enter amount' />
            </FormGroup>

            <FormGroup>
                <label htmlFor="income">Date:</label>
                <input type="datetime-local" id="income" name="income" />
            </FormGroup>

            <FormFooter>
                <Button variant='secondary' type='reset'>Clear</Button>
                <Button type='submit'>Confirm</Button>
            </FormFooter>
        </Form>
    )
}
