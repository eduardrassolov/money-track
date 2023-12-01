import styled from "styled-components";
import { devices } from "../../config/breakPoints";

export const StyledAsideBar = styled.nav<{ $isOpen: boolean }>`
    background: ${(props) => props.theme.background};
    border: 1px solid ${(props) => props.theme.border};

    display: ${(props) => (props.$isOpen ? "flex" : "none")};
    position: absolute;
    height: 100vh;
    z-index: 20;

    @media only screen and (min-width: ${devices.md}px) {
        display: flex;
        position: static;
    }
`;

export const Ul = styled.ul`
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 0.2rem;
    margin: 4rem 0;
    padding: 0;

    @media only screen and (min-width: ${devices.md}px) {
        margin: 1rem 0;
    }
`;
export const Background = styled.div<{ $isOpen: boolean }>`
    position: absolute;
    display: ${(props) => (props.$isOpen ? "flex" : "none")};
    z-index: 10;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(1px);

    @media only screen and (min-width: ${devices.md}px) {
        display: none;
    }
`;
