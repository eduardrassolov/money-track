import styled from "styled-components";

export const StyledNumber = styled.span<{ $isHighlight: boolean }>`
    color: ${(props) => (props.$isHighlight ? "#fff" : props.theme.text)};
    display: flex;
    justify-content: center;
    text-align: center;

    border-radius: 50%;
    width: 1rem;
    height: 1rem;
    padding: 1rem;
    background: ${(props) => (props.$isHighlight ? props.theme.colorLogoMain : props.theme.background2)};
    box-shadow:
        rgba(50, 50, 105, 0.15) 0px 2px 5px 0px,
        rgba(0, 0, 0, 0.05) 0px 1px 1px 0px;
    transition: 300ms ease-in-out;
`;

export const Span = styled.span<{ $isHighlight: boolean }>`
    display: flex;
    justify-content: center;
    text-align: center;
    align-items: center;
    color: ${(props) => (props.$isHighlight ? props.theme.colorLogoMain : props.theme.border)};
`;
