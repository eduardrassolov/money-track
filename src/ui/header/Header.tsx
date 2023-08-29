import { FC, memo } from "react";
import { styled } from "styled-components";

type HeaderProps = {
    text: string;
}

const H1 = styled.h1`
    font-weight: 500;
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 0.1rem;
    margin: 0;
    padding: 1rem 2rem;
    background: #fff;
    border-radius: 15px;
    margin-bottom: 1rem;
    font-size: 1.2rem;
`

const Header: FC<HeaderProps> = memo(function ({ text }) {
    return (
        <H1>{text}</H1>
    )
})
export default Header;
