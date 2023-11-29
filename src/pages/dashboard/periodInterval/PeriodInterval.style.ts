import styled from "styled-components";
import { devices } from "../../../config/breakPoints";

export const Ul = styled.ul`
    list-style: none;
    gap: 1rem;
    font-size: 0.8rem;
    display: flex;
    margin: 0;
    padding: 0;
    justify-content: center;
    align-items: center;
`;
export const Div = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;

    @media only screen and (min-width: ${devices.sm}px) {
        flex-direction: row;
    }
`;

export const Li = styled.li<{ $isSelected: boolean }>`
    cursor: pointer;
    transition: 300ms all;
    color: ${(props) => (props.$isSelected ? props.theme.colorLogoMain : props.theme.text)};

    &:hover {
        color: ${(props) => props.theme.colorLogoMain};
    }
`;
