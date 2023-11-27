import { StyledInput } from "../../input/Input";
import { TransactionProp } from "../useNewTransaction";
import { StyledDescriptions, TitleText } from "./NameTransaction.style";

type NameTransacrtionProps = TransactionProp & {
    description: string
}

export default function NameTransaction({ description, onChange }: NameTransacrtionProps) {

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => onChange("description", e.target.value);

    return (
        <StyledDescriptions>
            <TitleText>Transaction name:</TitleText>
            <StyledInput
                type="text"
                required
                autoFocus
                placeholder="Enter name of transaction"
                name={"description"}
                value={description}
                onChange={handleChange}
            />
        </StyledDescriptions>
    )
}
