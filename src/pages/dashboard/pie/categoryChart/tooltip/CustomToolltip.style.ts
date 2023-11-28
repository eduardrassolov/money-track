import styled from "styled-components";

export const StyledDiv = styled.div`
    background: ${(props) => props.theme.background};
    color: ${(props) => props.theme.text};
    padding: 0.5rem 1rem;
    border-radius: 7px;
    border: 1px solid ${(props) => props.theme.border};
`;
