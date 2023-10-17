import { styled } from 'styled-components'
import { QUERY_KEY } from '../../config/queryClientKeys'
import { loaderTransactions } from './loader'
import TransactionList from './TransactionList'
import Operation from '../../components/operations/Operations'

const Div = styled.div`
    display: flex;
    flex-direction: column;
    margin: 4rem 0 0;
    max-width: 650px;
    height: 90vh;
    padding: 0 0.5rem;
`

export default function Transactions() {
    return (
        <Div>
            <Operation />

            <TransactionList listType={QUERY_KEY.TRANSACTIONS} loader={loaderTransactions} />
        </Div>
    )
}
