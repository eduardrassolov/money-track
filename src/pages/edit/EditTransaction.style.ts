import styled from "styled-components";
import { devices } from "../../config/breakPoints";

export const Main = styled.main`
    width: 100%;
    display: flex;
    justify-content: center;
`;

export const Div = styled.div`
    width: 100%;
    padding: 1rem;

    @media only screen and (min-width: ${devices.sm}px) {
        width: 500px;
    }
`;

export const Label = styled.label`
    color: ${(props) => props.theme.text};
`;
