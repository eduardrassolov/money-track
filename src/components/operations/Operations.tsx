import { FILTER_DATE_OPTIONS, FILTER_KEYS } from './filter/filterParameters'
import Filter from './filter/Filter'
import Sort from './sort/Sort'
import { styled } from 'styled-components'
import { devices } from '../../styles/breakPoints'
import Search from '../search/Search'


export const OperationsContainer = styled.div`
    display: flex;;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.1rem;

    
    @media only screen and (min-width: ${devices.xs}px) {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(2, 1fr);
    }
`

const Container = styled.div`
    width: 100%;
`
const FirstContainer = styled(Container)`
    grid-area: 1/1/2/2; 
`
const SecondContainer = styled(Container)`
    grid-area: 1/2/2/3; 
`
const ThirdContainer = styled(Container)`
    grid-area: 2/1/3/3; 
`

export default function Operation() {
    return (
        <>
            <OperationsContainer>
                <FirstContainer>
                    <Filter options={FILTER_DATE_OPTIONS} filterKey={FILTER_KEYS.DATE} />
                </FirstContainer>

                <SecondContainer>
                    <Sort />
                </SecondContainer>

                <ThirdContainer>
                    <Search />
                </ThirdContainer>

            </OperationsContainer>
        </>

    )
}
