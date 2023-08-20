import { FC } from "react";
import { styled } from "styled-components";

type HeaderProps = {
    children: React.ReactNode
}

const H3 = styled.h3`
    font-size: 1.7rem;
    font-weight: 600;
    text-align: center;
    letter-spacing: 0.15rem;
`

const Header: FC<HeaderProps> = ({ children }) => {
    return (
        <H3>{children}</H3>
    )
}
export default Header;
