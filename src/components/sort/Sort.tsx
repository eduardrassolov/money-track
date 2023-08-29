import { useSearchParams } from 'react-router-dom';
import { styled } from 'styled-components'
import { Select } from '../filter/DropDown.style';

export default function Sort() {
    const [searchParams, setSearchParams] = useSearchParams();
    const selected = searchParams.get('sort') || 'date-desc';

    const handleChange = ({ target }) => {
        if (target.value === 'date-desc') {
            setSearchParams((params) => {
                params.delete('sort')
                return params;
            })
        }
        else {
            setSearchParams((params) => {
                params.set('sort', target.value)
                return params;
            })
        }
    }

    return (

        <Select onChange={handleChange} value={selected}>
            <option value="completed_at-desc">Sort by date ⬇</option>
            <option value="completed_at-asc">Sort by date ⬆</option>
            <option value="description-desc">Sort by name ⬇</option>
            <option value="description-asc">Sort by name ⬆</option>
            <option value="amount-desc">Sort by amount ⬇</option>
            <option value="amount-asc">Sort by amount ⬆</option>
        </Select>
    )
}
