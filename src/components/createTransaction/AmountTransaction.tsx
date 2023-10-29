
import { StyledInput } from '../input/Input'
import { StyledDescriptions, TitleText } from './NameTransaction'

export default function AmountTransaction({ amount, onChange }) {
    const handleChange = (e) => {
        console.log(e.target.value);
        onChange("amount", Number(e.target.value));
    }
    return (
        <StyledDescriptions>
            <TitleText>Amount transaction:</TitleText>

            <StyledInput
                type="number"
                value={amount}
                onChange={handleChange}
                placeholder="Enter amount of transaction"
                autoFocus />
        </StyledDescriptions>
    )
}