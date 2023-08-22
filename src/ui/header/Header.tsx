import { FC } from "react";
import { styled } from "styled-components";

type HeaderProps = {
    children: React.ReactNode
}

const H1 = styled.h1`
    font-weight: 600;
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 0.1rem;
`

const Header: FC<HeaderProps> = ({ children }) => {
    return (
        <H1>{children}</H1>
    )
}
export default Header;
