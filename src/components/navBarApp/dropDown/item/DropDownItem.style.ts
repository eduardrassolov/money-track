import { Item } from "@radix-ui/react-dropdown-menu";
import styled from "styled-components";

export const StyledItem = styled(Item)`
    cursor: pointer;
    border: none;
    color: ${(props) => props.theme.text};
    background: ${(props) => props.theme.background};
    padding: 0.3rem 1rem;
    font-size: 0.9rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;

    &:hover {
        outline: none;
        background: ${(props) => props.theme.colorLogoMain};
        color: #ffff;
        border-radius: 3px;
    }
`;
