

import { FILTER_DATE_OPTIONS, FILTER_KEYS } from './filter/filterParameters'
import Filter from './filter/Filter'
import Sort from './sort/Sort'
import { styled } from 'styled-components'
import { devices } from '../../styles/breakPoints'


export const OperationsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin: 0 0 1rem;
    justify-content: end;

    @media only screen and (min-width: ${devices.lg}px){
        flex-wrap: nowrap;
        gap: 1rem;
    }
`

export default function Operation() {
    return (
        <OperationsContainer>
            <Filter options={FILTER_DATE_OPTIONS} filterKey={FILTER_KEYS.DATE} />
            <Sort />
        </OperationsContainer>
    )
}
