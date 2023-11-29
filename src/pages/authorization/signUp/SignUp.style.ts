import styled from "styled-components";
import { PrimaryBtn } from "../../../styles/Button.style";

export const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

export const RegisterBtn = styled(PrimaryBtn)`
    padding: 1rem 2rem;
    transition: all 300ms;
    margin: 0 0 0.5rem;

    &:disabled {
        background: #e2e8f0;
        border: #e2e8f0;
        color: #000;
    }
`;
