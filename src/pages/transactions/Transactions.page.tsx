import { styled } from 'styled-components'
import Header from '../../ui/header/Header'
import { QUERY_KEY } from '../../config/queryClientKeys'
import TransactionArr from './TransactionArr'
import { loaderTransactions } from './loader'

const Div = styled.div`
    display: flex;
    flex-direction: column;
    padding: 2rem 0 1rem;
    width: clamp(30px, 500px, 95%);
`

export default function Transactions() {

    return (
        <>
            <Header>Transactions</Header>

            <Div>
                <TransactionArr listType={QUERY_KEY.TRANSACTIONS} loader={loaderTransactions} />
            </Div>
        </>
    )
}
