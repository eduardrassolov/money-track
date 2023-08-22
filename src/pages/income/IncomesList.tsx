import { styled } from 'styled-components'
import TransactionsList from '../../components/transactionCard/TransactionsList'


const Div = styled.div`
    display: flex;
    flex-direction: column;
    padding: 2rem 1rem;
`

export default function IncomesList() {
    return (
        <Div>
            <TransactionsList />
        </Div>
    )
}
