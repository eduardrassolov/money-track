import styled from "styled-components";
import { devices } from "../../../config/breakPoints";

export const Nav = styled.nav`
    backdrop-filter: blur(9px) saturate(180%);
    -webkit-backdrop-filter: blur(9px) saturate(180%);
    background: rgba(255, 255, 255, 0.3);
    font-size: 1rem;
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    width: 100%;
    transition: all 300ms;
    z-index: 5;
`;

export const SwitchContainer = styled.div`
    margin: auto 4rem;

    @media only screen and (min-width: ${devices.md}px) {
        display: none;
    }
`;
