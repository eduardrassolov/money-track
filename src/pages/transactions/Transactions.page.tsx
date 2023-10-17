import { styled } from 'styled-components'
import { QUERY_KEY } from '../../config/queryClientKeys'
import { loaderTransactions } from './loader'
import TransactionList from './TransactionList'
import Operation from '../../components/operations/Operations'
import { useRef } from 'react'

const Div = styled.div`
    display: flex;
    flex-direction: column;
    margin: 4rem 0 0;
    max-width: 650px;
    height: 100vh;
    overflow: scroll;
    padding: 0 0.5rem;
`

export default function Transactions() {
    const divRef = useRef<HTMLDivElement>(null);
    const moveToTop = () => divRef?.current?.scrollTo({ top: 0, behavior: 'smooth' });
    return (
        <Div ref={divRef}>
            <Operation />

            <TransactionList listType={QUERY_KEY.TRANSACTIONS} loader={loaderTransactions} scrollToTop={moveToTop} />
        </Div>
    )
}
