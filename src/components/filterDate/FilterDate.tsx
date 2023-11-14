import dayjs from 'dayjs';
import { useState } from 'react';
import styled from 'styled-components';
import { useBoundStore } from '../../store/store';
import { Range } from '../../store/createDateRangeFilterSlice';
import DateFilter from '../dateRangePicker/DateFilter';
import { devices } from '../../config/breakPoints';

// const filterList = ["Day", "Week", "Month", "Year"];
const filterList = [
    {
        id: "custom",
        label: "Custom",
        range: [dayjs().format("DD-MMM-YYYY"), dayjs().format("DD-MMM-YYYY")]
    },
    {
        id: "day",
        label: "Day",
        range: [dayjs().format("DD-MMM-YYYY"), dayjs().format("DD-MMM-YYYY")]
    },
    {
        id: "week",
        label: "Week",
        range: [dayjs().add(-7, 'd').format("DD-MMM-YYYY"), dayjs().format("DD-MMM-YYYY")]
    },
    {
        id: "month",
        label: "Month",
        range: [dayjs().add(-30, 'd').format("DD-MMM-YYYY"), dayjs().format("DD-MMM-YYYY")]
    },
    {
        id: "3months",
        label: "3 Months",
        range: [dayjs().add(-90, 'd').format("DD-MMM-YYYY"), dayjs().format("DD-MMM-YYYY")]
    }
];

const Ul = styled.ul`
    list-style: none;
    gap: 1rem;
    font-size: 0.8rem;
    display: flex;
    margin: 0;
    padding: 0;
    justify-content: center;
    align-items: center;
`
const Div = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;

    @media only screen and (min-width: ${devices.sm}px){
        flex-direction: row;
    }
`

const Li = styled.li<{ $isSelected: boolean }>`
    cursor: pointer;
    transition: 300ms all;
    color: ${props => props.$isSelected ? props.theme.colorLogoMain : props.theme.text};

    &:hover{
        color: ${props => props.theme.colorLogoMain};
    }
`

export default function FilterDate() {
    const [selected, setSelected] = useState<string>("");

    const { changeRange } = useBoundStore(state => ({ changeRange: state.changeRange }))

    const isShowCustom = selected === "custom";

    function handleSelectRange(id: string) {
        setSelected(() => id);

        console.log(id);
        const result = filterList.find(item => item.id === id);
        if (!result) {
            return;
        }
        const { range } = result;
        changeRange(range as Range);
    }

    return (
        <Div>
            {isShowCustom ? <DateFilter /> : ""}

            <Ul>
                {filterList.map((filterItem) =>
                    <Li key={filterItem.id} onClick={() => handleSelectRange(filterItem.id)} $isSelected={selected === filterItem.id}>
                        {filterItem.label}
                    </Li>)}
            </Ul>
        </Div>
    )
}
