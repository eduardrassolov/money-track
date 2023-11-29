import styled from "styled-components";

export const LoginContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
`;

export const StyledInput = styled.input`
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

export const Header = styled.h1`
    font-size: 2rem;
    font-weight: 500;
    margin: 0;
`;
