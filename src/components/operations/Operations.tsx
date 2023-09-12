

import { FILTER_DATE_OPTIONS, FILTER_KEYS } from './filter/filterParameters'
import Filter from './filter/Filter'
import Sort from './sort/Sort'
import { styled } from 'styled-components'
import { devices } from '../../styles/breakPoints'
import Search from '../search/Search'


export const OperationsContainer = styled.div`
    display: flex;
    gap: 0.5rem;
    margin: 0 0 2rem;
    justify-content: end;
    flex-direction: column;

    @media only screen and (min-width: ${devices.sm}px){
        display: flex;
        flex-direction: row;
    }
    `

export default function Operation() {
    return (
        <>
            <OperationsContainer>
                <Filter options={FILTER_DATE_OPTIONS} filterKey={FILTER_KEYS.DATE} />

                <Sort />

                <Search />

            </OperationsContainer>
        </>

    )
}
