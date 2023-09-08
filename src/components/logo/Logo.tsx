import { styled } from "styled-components"

const NavLogo = styled.div`
    display: flex;
    align-items: center;
    font-size: 1.5rem;
    font-weight: bold;
    height: 55px;
    margin: auto 1rem;
    transition: all 300ms;
    p{
        &:hover{
            color: #7286D3;
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
