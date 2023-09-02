import { FC, memo } from "react";
import { styled } from "styled-components";

type HeaderProps = {
    text: string;
}

const Div = styled.div`
    margin: 0;
    padding: 1rem 1.5rem;
    background: #fff;
    /* border: 1px solid #7e22ce; */
    border-radius: 15px;
    margin-bottom: 1rem;
`
const H1 = styled.h1`
    margin: 0;
    padding: 0;
    font-weight: 500;
    text-align: center;
    letter-spacing: 0.1rem;    
    font-size: 1.2rem;
`

const Header: FC<HeaderProps> = memo(function ({ text }) {
    return (
        <Div>
            <H1>{text}</H1>
        </Div>
    )
})
export default Header;
