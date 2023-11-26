import styled from "styled-components";

export const Ul = styled.ul`
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
    font-size: 1rem;
    border: 1px solid ${(props) => props.theme.border};
    border-radius: 7px;
    width: fit-content;
`;

export const Li = styled.li<{ $isSelected: boolean }>`
    color: ${(props) => (props.$isSelected ? props.theme.colorLogoMain : "")};
    background: ${(props) => (props.$isSelected ? props.theme.background2 : "")};
    border-radius: 5px;
    padding: 0.8rem 1.5rem;
    &:hover {
        cursor: pointer;
    }
`;
