import styled from "styled-components";

export const InfoSection = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
`;

export const Title = styled.span`
    font-size: 1.1rem;
    font-weight: 500;
    color: ${(props) => props.theme.text};
`;

export const Time = styled.span`
    color: gray;
    font-size: 0.9rem;
`;
