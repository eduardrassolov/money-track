import { styled } from 'styled-components'
import TransactionsList from '../../components/transactionCard/TransactionsList'


const Div = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 1rem;
    border: 1px solid #ccc;
    border-radius: 7px;
`

export default function IncomesList() {
    return (
        <Div>
            <TransactionsList />
        </Div>
    )
}
