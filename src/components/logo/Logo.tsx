import { styled } from "styled-components"
import { devices } from "../../styles/breakPoints"

const NavLogo = styled.div`
    display: flex;
    align-items: center;
    font-size: 1.5rem;
    font-weight: bold;
    height: 55px;
    margin: auto 1rem;
    transition: all 300ms;
    gap: 1rem;

    img{
        width: 35px;
    }

    /* p{
        &:hover{
            color: #7286D3;
            cursor: pointer;
        }
        font-family: 'Montserrat', sans-serif;
        font-weight: 800;
        font-size: 1.5rem;

        @media only screen and (max-width: ${devices.md}px){
            display: none;
        }
    } */
`

const H1 = styled.h1`
    font-size: 1.5rem;
    margin: 0;

`

export default function Logo() {
    return (
        <NavLogo>
            <img src="/logo.png" alt="logo" />

            <H1>Budget Control</H1>
        </NavLogo>
    )
}
