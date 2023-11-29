import styled from "styled-components";

export const Input = styled.input`
    font-size: 1rem;
    padding: 0.7rem 1rem;
    border-radius: 7px;
    background: ${(props) => props.theme.background};
    border: 1px solid ${(props) => props.theme.border};
    color: ${(props) => props.theme.text};
    transition: all 300ms;

    &:focus {
        outline: none;
        border: 1px solid #0284c7;
        background: ${(props) => props.theme.background};
        color: ${(props) => props.theme.text};
        transition: all 0.3s ease-in-out;
    }
`;
