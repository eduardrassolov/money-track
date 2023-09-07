

import { FILTER_DATE_OPTIONS, FILTER_KEYS } from './filter/filterParameters'
import Filter from './filter/Filter'
import Sort from './sort/Sort'
import { styled } from 'styled-components'


export const OperationsContainer = styled.div`
    display: flex;
    gap: 1rem;
    margin: 0 0 1rem;
    justify-content: end;
`

export default function Operation() {
    return (
        <OperationsContainer>
            <Filter options={FILTER_DATE_OPTIONS} filterKey={FILTER_KEYS.DATE} />
            <Sort />
        </OperationsContainer>
    )
}
