import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("/bgDay.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    justify-content: center;
    align-items: center;
    letter-spacing: 0.4px;
`

export const Div = styled.div`
    display: flex;
    flex-direction: column;
    color: #dfdfdf;
    align-items: center;
`

export const ImgBlock = styled.div`
    width: 800px;
    margin: auto;
    
`

export const H1 = styled.h1`
    font-size: 8rem;
    letter-spacing: 0.5rem;
    margin: 0 0 1rem;
    letter-spacing: 1rem;
`

export const P = styled.p`
    margin: 0 0 1rem;
    font-size: 1.2rem;
`

export const Text = styled(P)`
    font-size: 0.8rem;
`

export const StyledNavLink = styled(NavLink)`
    color: #a3a3a3;
    &:visited{
        color: #a3a3a3;
    }
`