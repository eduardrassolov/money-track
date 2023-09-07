import { styled } from 'styled-components'
import { QUERY_KEY } from '../../config/queryClientKeys'

import { loaderTransactions } from './loader'
import Header from '../../ui/header/Header'
import TransactionList from './TransactionList'
import Operation from '../../components/operations/Operations'

const Div = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 0 0.7rem;
    width: clamp(30px, 600px, 95%);
`

export default function Transactions() {
    return (
        <Div>
            <Header text={`All Transactions `} />

            <Operation />

            <TransactionList listType={QUERY_KEY.TRANSACTIONS} loader={loaderTransactions} />
        </Div>
    )
}
