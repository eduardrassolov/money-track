import { styled } from 'styled-components'
import TransactionsList from '../../components/transactionCard/TransactionsList'
import Header from '../../ui/header/Header'

const Div = styled.div`
    display: flex;
    flex-direction: column;
    padding: 2rem 0 1rem;
    width: clamp(30px, 800px, 95%);
`

export default function Transactions() {
    return (
        <>
            <Header>Transactions</Header>

            <Div>
                <TransactionsList />
            </Div>
        </>
    )
}
