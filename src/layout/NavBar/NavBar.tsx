import { styled } from "styled-components"

const Nav = styled.nav`
    display: none;

    @media (max-width: 800px) {
        top: 0;
        left: 0;
        padding: 1rem;
        display: flex;
        width: 100%;
        background-color: blue;
    }
`

export default function NavBar() {
    return (
        <Nav>This is navbar</Nav>
    )
}
