
import styled from "styled-components";
import { StyledInput } from "../input/Input";
import { TransactionProp } from "./useNewTransaction";

export const StyledDescriptions = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    margin: 1rem 0;
`
export const TitleText = styled.p`
    margin: 0;
    font-size: 1.1rem;
`

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
