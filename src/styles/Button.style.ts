import { styled } from "styled-components";

const Button = styled.button`
    font-size: 1rem;
    padding: 0.5rem 1rem;
    cursor: pointer;
    transition: all 0.3s;
    border: 1px solid #3b82f6;
    border-radius: 7px;
    color: #fff;

    &:active {
        scale: 0.95;
    }
`;

const PrimaryBtn = styled(Button)`
    background: #3b82f6;
    &:hover {
        background: #1d4ed8;
    }
`;

const SecondaryBtn = styled(Button)`
    background: transparent;
    color: #3b82f6;
    &:hover {
        background: #dbeafe;
    }
`;

const LoginBtn = styled(PrimaryBtn)`
    padding: 1rem 2rem;
    transition: all 300ms;
    margin: 1rem 0 0;

    &:disabled {
        background: #e2e8f0;
        border: #e2e8f0;
        color: #000;
    }
`;

export { Button, PrimaryBtn, SecondaryBtn, LoginBtn };
