import { styled } from 'styled-components'
import { devices } from '../../config/breakPoints'
import DateFilter from '../dateRangePicker/DateFilter';


// import DateRangePicker from '@wojtekmaj/react-daterange-picker';
import '@wojtekmaj/react-daterange-picker/dist/DateRangePicker.css';
import 'react-calendar/dist/Calendar.css';
// import { useBoundStore } from '../../store/store';
// import { Range } from '../../store/createDateRangeFilterSlice';


export const OperationsContainer = styled.div`
   
    
    @media only screen and (min-width: ${devices.sm}px) {
    }
`

// const Filter = styled.div`
//     border: 1px solid ${props => props.theme.border};
//     border-radius: 10px;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     padding: 0.5rem 1rem;
//     cursor: pointer;
// `

// const StyledRangePicker = styled(DateRangePicker)`
//     background: ${props => props.theme.background2};
//     color: ${props => props.theme.text};
//     font-size: 0.8rem;

//     .react-daterange-picker__wrapper{
//         border: 1px solid ${props => props.theme.border};
//         padding: 0.2rem 0.5rem;
//         border-radius: 10px;
//     }
// `

// type ValuePiece = string | null;
// type Value = ValuePiece | [ValuePiece, ValuePiece];

export default function Operation() {
    // const { range, changeRange } = useBoundStore((state) => ({ range: state.range, changeRange: state.changeRange }));

    // function handleRangeChange(range: Range) {
    //     changeRange(range);
    // }

    return (
        <>
            {/* <StyledRangePicker
                onChange={handleRangeChange}
                value={range}
                clearIcon={null}
                maxDate={new Date()}
                rangeDivider={"-"}
                format={"dd-MMM"}
                locale="en-IN"

            /> */}
            <DateFilter />

        </>
    )
}
