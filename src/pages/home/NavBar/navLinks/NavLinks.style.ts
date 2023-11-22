import styled from "styled-components";
import { devices } from "../../../../config/breakPoints";

export const Ul = styled.ul<{ $isOpen: boolean }>`
    position: absolute;
    top: 0;
    right: 0;
    margin: 0;
    z-index: 20;
    height: 100vh;
    flex-flow: column;
    font-size: 1.1rem;
    padding: 5rem 2rem 0;
    background: ${(props) => props.theme.background};
    display: ${(props) => (props.$isOpen ? "flex" : "none")};
    list-style: none;
    transition: all 300ms;
    width: 35%;

    li {
        margin: 1rem auto 2rem 0;
        text-align: start;
        cursor: pointer;

        &:hover {
            color: ${(props) => props.theme.colorLogoMain};
        }
    }

    @media only screen and (min-width: ${devices.md}px) {
        background: transparent;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        transform: translateX(0);
        height: auto;
        margin: 0;
        padding: 0;
        position: static;
        li {
            margin: 0 1rem 0;
        }
    }
`;

export const A = styled.a`
    &:hover {
        transition: all 300ms;
        color: ${(props) => props.theme.colorLogoMain};
    }
`;

export const Li = styled.li`
    display: none;
    @media only screen and (min-width: ${devices.md}px) {
        display: flex;
    }
`;
