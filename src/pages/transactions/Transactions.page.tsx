import { styled } from 'styled-components'
import { QUERY_KEY } from '../../config/queryClientKeys'
import TransactionArr from './TransactionArr'
import { loaderTransactions } from './loader'
import Header from '../../ui/header/Header'
import Filter from '../../components/filter/Filter'
import { FILTER_DATE_OPTIONS, FILTER_KEYS } from '../../components/filter/filterParameters'
import Sort from '../../components/sort/Sort'

const Div = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 0 0.7rem;
    width: clamp(30px,500px, 95%);
`
export const Operations = styled.div`
    display: flex;
    gap: 1rem;
    margin: 0 0 1rem;
    justify-content: end;
`

export default function Transactions() {

    return (
        <>
            <Div>
                <Header text={`All Transactions `} />

                <Operations>
                    <Filter options={FILTER_DATE_OPTIONS} filterKey={FILTER_KEYS.DATE} />
                    <Sort />
                </Operations>

                <TransactionArr listType={QUERY_KEY.TRANSACTIONS} loader={loaderTransactions} />
            </Div>
        </>
    )
}
