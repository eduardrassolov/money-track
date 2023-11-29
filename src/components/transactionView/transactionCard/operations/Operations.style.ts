import styled from "styled-components";

export const Div = styled.div`
    grid-row: 2;
    grid-column: 1/5;
    display: flex;
    justify-content: flex-end;
    gap: 0.3rem;
`;

export const IconButton = styled.button`
    border: 1px solid ${(props) => props.theme.border};
    color: ${(props) => props.theme.text};
    background: transparent;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 0.3rem;
    padding: 0.4rem 0.7rem;
    border-radius: 10px;
    transition: 300ms all;

    &:hover {
        border: 1px solid ${(props) => props.theme.colorLogoMain};
    }

    span {
        font-size: 0.8rem;
    }
`;
