import { styled } from "styled-components";

const Button = styled.button`
    font-size: 1rem;
    padding: 0.5rem 1.1rem;
    cursor: pointer;
    transition: all 0.3s;
    border: 1px solid #3b82f6;
    border-radius: 7px;
    color: #fff;

    &:active{
        scale: 0.95;
    }
`

const PrimaryBtn = styled(Button)`
    background: #3b82f6;
    &:hover{
        background: #1d4ed8;
    }
`

const SecondaryBtn = styled(Button)`
    background: transparent;
    color: #3b82f6;
    &:hover{
        background: #dbeafe;
    }
`

const LoginBtn = styled(PrimaryBtn)`
    padding: 1rem;
`
export { Button, PrimaryBtn, SecondaryBtn, LoginBtn }