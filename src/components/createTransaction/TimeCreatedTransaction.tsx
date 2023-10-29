import dayjs from "dayjs";
import { StyledInput } from "../input/Input";
import { StyledDescriptions, TitleText } from "./NameTransaction";

export default function TimeCreatedTransaction({ timeCompleted, onChange }) {
    const handleChange = (e) => onChange("timeCompleted", dayjs(e.target.value).format("YYYY-MM-DD HH:mm"));

    return (
        <StyledDescriptions>
            <TitleText>Transaction completed at: </TitleText>
            <StyledInput type="datetime-local" value={timeCompleted} onChange={handleChange} />
        </StyledDescriptions >
    )
}
