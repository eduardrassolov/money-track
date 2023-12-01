import styled from "styled-components";

export const Div = styled.div`
    display: flex;
    align-items: center;
    gap: 0.8rem;
`;

export const Icon = styled.span`
    background: ${(props) => props.theme.background2};
    display: flex;
    padding: 0.5rem;
    border-radius: 50%;
`;
