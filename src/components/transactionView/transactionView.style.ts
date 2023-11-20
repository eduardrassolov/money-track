import styled from "styled-components";
import { devices } from "../../config/breakPoints";

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

export const Main = styled.main`
    display: flex;
    gap: 1rem;
    max-width: 800px;
    margin: 0 auto;
    height: 100%;
    /* @media only screen and (min-width: ${devices.sm}px) {
        display: grid;
        grid-template-columns: minmax(350px, 700px) minmax(200px, 400px);
        height: 100%;
        gap: 1rem;
    } */
`;

export const StyledHeaderContainer = styled.header`
    display: flex;
    align-items: center;
    gap: 1rem;
    margin: 0;
    padding: 0;
    width: 100%;
`;
