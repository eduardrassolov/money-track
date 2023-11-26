import styled from "styled-components";
import { devices } from "../../config/breakPoints";

export const Nav = styled.nav`
    background: ${(props) => props.theme.background};
    color: ${(props) => props.theme.text};
    border-bottom: 1px solid ${(props) => props.theme.border};
    display: flex;
    align-items: center;
    transition: all 300ms;
    padding: 0 1rem;
    height: 50px;
    gap: 1rem;
    justify-content: space-between;

    @media only screen and (min-width: ${devices.md}px) {
        justify-content: flex-end;
    }
`;
