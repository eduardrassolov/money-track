import styled from "styled-components";
import { devices } from "../../config/breakPoints";

export const Div = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    justify-content: center;
    align-items: center;
    width: 100%;

    h1 {
        font-size: 1.2rem;
        font-weight: 500;
        color: ${(props) => props.theme.text};
    }
`;

export const Container = styled.div`
    background: ${(props) => props.theme.background};
    border-radius: 15px;
    border: 1px solid ${(props) => props.theme.border};
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem 0;
`;

export const DateFilterContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
    justify-content: start;
    margin: 2rem 0 0 0;

    @media only screen and (min-width: ${devices.sm}px) {
        align-items: flex-end;
    }
`;

export const Main = styled.main`
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    height: 93vh;
    overflow: scroll;
    max-width: 1200px;
    padding: 0 1rem;

    @media only screen and (min-width: ${devices.md}px) {
        width: 95%;
    }
`;
