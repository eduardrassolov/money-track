import { styled } from 'styled-components'
import TransactionsList from '../../components/transactionCard/TransactionsList'


const Div = styled.div`
    /* display: flex;
    flex-direction: column;
    padding: 0 1rem;
    padding: 2rem 0 1rem; */
`

export default function ExpensesList() {
    return (
        <Div>
            <TransactionsList />
        </Div>
    )
}

