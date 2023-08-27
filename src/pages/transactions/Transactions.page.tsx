import { styled } from 'styled-components'
import TransactionsList from '../../components/transactionCard/TransactionsList'
import Header from '../../ui/header/Header'
import { useQuery } from '@tanstack/react-query'
import getTransactions from '../../api/getTransactions'

const Div = styled.div`
    display: flex;
    flex-direction: column;
    padding: 2rem 0 1rem;
    width: clamp(30px, 800px, 95%);
`

export default function Transactions() {
    const { data, error } = useQuery({ queryKey: ['transactions'], queryFn: getTransactions });

    if (!data || error instanceof Error)
        return;

    return (
        <>
            <Header>Transactions</Header>

            <Div>
                <TransactionsList data={data} listType={'transactions'} />
            </Div>
        </>
    )
}
