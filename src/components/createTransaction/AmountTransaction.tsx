
import { StyledInput } from '../input/Input'
import { StyledDescriptions, TitleText } from './NameTransaction'

export default function AmountTransaction({ register }: any) {
    return (
        <StyledDescriptions>
            <TitleText>Amount transaction:</TitleText>
            <StyledInput type="number" {...register("amount")} placeholder="Enter amount of transaction" autoFocus />
        </StyledDescriptions>
    )
}
