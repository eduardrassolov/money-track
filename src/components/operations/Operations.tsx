import Sort from './sort/Sort'
import { styled } from 'styled-components'
import { devices } from '../../config/breakPoints'
import Search from '../search/Search'
import DateFilter from '../dateRangePicker/DateFilter'


export const OperationsContainer = styled.div`
    display: flex;;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.1rem;
    margin: 0 0 0.5rem;

    
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
    grid-area: 1/1/2/3; 
`
const SecondContainer = styled(Container)`
    grid-area: 2/1/3/2; 
`
const ThirdContainer = styled(Container)`
    grid-area: 2/2/3/3; 
`

export default function Operation() {
    return (
        <OperationsContainer>
            <FirstContainer>
                {/* <Filter options={FILTER_DATE_OPTIONS} filterKey={FILTER_KEYS.DATE} /> */}
                <DateFilter />
            </FirstContainer>

            <SecondContainer>
                <Search />
            </SecondContainer>

            <ThirdContainer>
                <Sort />
            </ThirdContainer>

        </OperationsContainer>
    )
}
