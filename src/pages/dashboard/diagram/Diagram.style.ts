import styled from "styled-components";

export const Container = styled.div`
    background: ${(props) => props.theme.background};
    border-radius: 15px;
    border: 1px solid ${(props) => props.theme.border};
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem 0;
`;

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
