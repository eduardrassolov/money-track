import { useSearchParams } from 'react-router-dom';
import { styled } from 'styled-components'

const Select = styled.select`
    padding: 0.3rem 0.6rem;
    border-radius: 7px;
    cursor: pointer;
`

interface IFilter {
    filterKey: string,
    options: Array<{
        value: string,
        text: string
    }>

}

export default function Filter() {
    const [searchParams, setSearchParams] = useSearchParams();
    const selected = searchParams.get('date') || 'all';

    const handleChange = ({ target }) => {
        console.log(target.value);
        if (target.value === 'all') {
            setSearchParams((params) => {
                params.delete('date');
                return params;
            })
        }
        else {
            setSearchParams((params) => {
                params.set('date', target.value);
                return params;
            })
        }
    }

    return (

        <Select onChange={handleChange} value={selected}>
            <option value="all">No filter</option>
            <option value="today">Filter by today</option>
            <option value="week">Filter by last week</option>
            <option value="month">Filter by last month</option>
            <option value="year">FIlter by last year</option>
        </Select>

    )
}
