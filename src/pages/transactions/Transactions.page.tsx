import { styled } from 'styled-components'
import TransactionsList from '../../components/transactionCard/TransactionsList'
import Header from '../../ui/header/Header'
import { useQuery } from '@tanstack/react-query'
import getTransactions from '../../api/getTransactions'
import { QUERY_KEY } from '../../config/queryClientKeys'

const Div = styled.div`
    display: flex;
    flex-direction: column;
    padding: 2rem 0 1rem;
    width: clamp(30px, 800px, 95%);
`

export default function Transactions() {
    const { data, error } = useQuery({ queryKey: [QUERY_KEY.TRANSACTIONS], queryFn: getTransactions });

    if (!data || error instanceof Error)
        return;

    return (
        <>
            <Header>Transactions</Header>

            <Div>
                <TransactionsList data={data} listType={QUERY_KEY.TRANSACTIONS} />
            </Div>
        </>
    )
}
