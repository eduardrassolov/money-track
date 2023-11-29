import styled from "styled-components";
import { devices } from "../../config/breakPoints";

export const P = styled.p`
    overflow-wrap: break-word;
    display: none;
    color: ${(props) => props.theme.text};

    @media only screen and (min-width: ${devices.sm}px) {
        display: flex;
    }
`;
export const ProfileContainer = styled.div`
    display: flex;
    align-items: center;
    text-align: center;
    gap: 0.5rem;
`;
