import { useSearchParams } from 'react-router-dom';
import { Select } from '../filter/DropDown.style';

const optionsData = [
    {
        value: "completed_at-desc",
        text: "Sort by date ⬇"
    },
    {
        value: "completed_at-asc",
        text: "Sort by date ⬆"
    },
    {
        value: "escription-desc",
        text: "Sort by name ⬇"
    },
    {
        value: "description-asc",
        text: "Sort by name ⬆"
    },
    {
        value: "amount-desc",
        text: "Sort by amount ⬇"
    },
    {
        value: "amount-asc",
        text: "Sort by amount ⬆"
    },
]

export default function Sort() {
    const [searchParams, setSearchParams] = useSearchParams();
    const selected = searchParams.get('sort') || 'date-desc';

    function handleChange(e: React.ChangeEvent<HTMLSelectElement>) {
        const { target: { value } } = e;

        if (value === 'date-desc') {
            setSearchParams((params) => {
                params.delete('sort');
                return params;
            })
        }
        else {
            setSearchParams((params) => {
                params.set('sort', value);
                return params;
            })
        }
    }

    return (
        <Select onChange={handleChange} value={selected}>
            {optionsData.map((option) => <option key={option.value} value={option.value}>{option.text}</option>)}
        </Select>
    )
}
