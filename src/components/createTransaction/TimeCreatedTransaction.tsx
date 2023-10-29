import dayjs from "dayjs";
import { StyledInput } from "../input/Input";
import { StyledDescriptions, TitleText } from "./NameTransaction";
import { TransactionProp } from "./useNewTransaction";

type TimeTrProps = TransactionProp & {
    timeCompleted: string
}

export default function TimeCreatedTransaction({ timeCompleted, onChange }: TimeTrProps) {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => onChange("timeCompleted", dayjs(e.target.value).format("YYYY-MM-DD HH:mm"));

    return (
        <StyledDescriptions>
            <TitleText>Transaction completed at: </TitleText>
            <StyledInput type="datetime-local" value={timeCompleted} onChange={handleChange} />
        </StyledDescriptions >
    )
}
