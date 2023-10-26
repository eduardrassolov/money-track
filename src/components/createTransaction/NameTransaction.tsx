
import styled from "styled-components";
import { StyledInput } from "../input/Input";
import { ErrorP } from "../newTransaction/FormTransaction.style";

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

export default function NameTransaction({ register }) {

    return (
        <StyledDescriptions>
            <TitleText>Transaction name:</TitleText>
            <StyledInput type="text" {...register("description")} autoFocus placeholder="Enter name of transaction" />
        </StyledDescriptions>
    )
}
