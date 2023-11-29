import styled from "styled-components";
import { devices } from "../../../config/breakPoints";

export const StyledDiv = styled.div`
    display: flex;
    gap: 1rem;
    flex-direction: column;

    @media only screen and (min-width: ${devices.sm}px) {
        flex-direction: row;
    }
`;
