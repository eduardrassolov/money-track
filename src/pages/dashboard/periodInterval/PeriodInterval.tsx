import { useState } from 'react';
import { useBoundStore } from '../../../store/store';
import { Range } from '../../../store/createDateRangeFilterSlice';
import DateFilter from '../../../components/dateRangePicker/DateFilter';
import { Div, Li, Ul } from './PeriodInterval.style';
import { filterList } from './periodIntervalData';

export default function PeriodInterval() {
    const { changeRange } = useBoundStore(state => ({ changeRange: state.changeRange }));

    const [selected, setSelected] = useState<string>("");

    const isShowCustom = selected === "custom";

    function handleSelectRange(id: string) {
        setSelected(() => id);

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
