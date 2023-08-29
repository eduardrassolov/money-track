import { useSearchParams } from 'react-router-dom';
import { Select } from './DropDown.style';
import { Option } from './filterParameters';

interface IFilter {
    options: Array<Option>;
    filterKey: string;
}

export default function Filter({ options, filterKey }: IFilter) {
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
                params.set(filterKey, value);
                return params;
            })
        }
    }
    console.log(options);

    return (
        <Select onChange={handleChange} value={selected}>
            {options.map((opt) => <option key={opt.value} value={opt.value}>{opt.text}</option>)}
        </Select>

    )
}
