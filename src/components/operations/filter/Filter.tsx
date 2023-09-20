import { useSearchParams } from 'react-router-dom';

import { Option } from './filterParameters';
import { memo } from 'react';
import { StyledSelect } from '../../dropDown/Select';
interface IFilter {
    options: Array<Option>;
    filterKey: string;
}

const Filter = memo(function ({ options, filterKey }: IFilter) {
    const [defaultValue] = options;

    const [searchParams, setSearchParams] = useSearchParams();
    const selected = searchParams.get(filterKey) || '';

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const { target: { value } } = event;

        if (value === defaultValue.value) {
            setSearchParams((params) => {
                params.delete(filterKey);
                return params;
            })
        }
        else {
            setSearchParams((params) => {
                // params.set('page', "1");
                params.set(filterKey, value);
                return params;
            })
        }
    }

    return (
        <StyledSelect onChange={handleChange} value={selected}>
            {options.map((opt) => <option key={opt.value} value={opt.value}>{opt.text}</option>)}
        </StyledSelect >

    )
})

export default Filter