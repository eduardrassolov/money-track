import { styled } from 'styled-components'
import TYPES_TRANSACTION from '../../config/typeTransactions'
import { FC } from 'react'
import { Form } from 'react-router-dom';
import Button from '../../ui/Button';
import Category from '../category/Category';
import { EXPENSE_OPTIONS, INCOME_OPTIONS } from '../../config/category';

const StyledForm = styled(Form)`
    display: flex;
    flex-direction: column;
    padding: 1.5rem;
    border: 1px solid #ccc;
    border-radius: 7px;
    height: fit-content;
    max-width: 300px;
    h4{
        margin: 0 auto 1.5rem 0;
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

const NewTransactionForm: FC<INewTransactionProps> = ({ type }) => {
    const optionsSelect = type === TYPES_TRANSACTION.INCOME ? INCOME_OPTIONS : EXPENSE_OPTIONS;

    console.log(optionsSelect);

    return (
        <StyledForm method='post'>
            {type === TYPES_TRANSACTION.INCOME ?
                <h4>Add new income:</h4> : <h4>Add new expense:</h4>}

            <FormGroup>
                <label htmlFor="description">*Description:</label>
                <input type="text" id="description" name="description" placeholder='Enter description' required autoFocus autoComplete="off" />
            </FormGroup>

            <FormGroup>
                <label htmlFor="category">*Category:</label>
                <Category options={optionsSelect} />
            </FormGroup>

            <FormGroup>
                <label htmlFor="amount">*Amount:</label>
                <input type="number" id="amount" step={0.01} name="amount" min={1} placeholder='Enter amount' required autoComplete='off' />
            </FormGroup>

            <FormGroup>
                <label htmlFor="completed_at">*Date:</label>
                <input type="datetime-local" id="completed_at" name="completed_at" required />
            </FormGroup>

            <FormFooter>
                <Button variant='secondary' type='reset'>Clear</Button>
                <Button type='submit' >Confirm</Button>
            </FormFooter>
        </StyledForm>
    )
}
export default NewTransactionForm;
