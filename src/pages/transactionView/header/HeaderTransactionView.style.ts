import styled from "styled-components";
import { devices } from "../../../config/breakPoints";

export const Header = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    padding: 1rem 0;
    border-bottom: 1px solid ${(props) => props.theme.border};

    @media only screen and (min-width: ${devices.sm}px) {
        justify-content: space-between;
        flex-direction: row;
    }
`;

export const Text = styled.p`
    font-size: 1rem;
    margin: 0;
    padding: 0;
    color: ${(props) => props.theme.text};
`;
