import { styled } from "styled-components"

const NavLogo = styled.div`
    display: flex;
    align-items: center;
    font-size: 1.5rem;
    font-weight: bold;
    margin: auto 1rem;

    p{
        &:hover{
            color: #7286D3;
            transition: all 300ms ease-in-out;
            cursor: pointer;
        }
    }
`

export default function Logo() {
    return (
        <NavLogo>
            <p>E-Budget</p>
        </NavLogo>
    )
}
