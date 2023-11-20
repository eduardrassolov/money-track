import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Li = styled.li`
    padding: 0 0.5rem;
`;

export const Icon = styled.span`
    font-size: 1.5rem;
`;

export const StyledItem = styled(NavLink)`
    text-decoration: none;
    display: flex;
    font-size: 0.9rem;
    gap: 0.5rem;
    align-items: center;
    text-align: center;
    cursor: pointer;
    padding: 0.5rem 1rem;
    transition: 300ms all;
    color: gray;
    border-radius: 10px;

    &:hover {
        background: ${(props) => props.theme.hoverAside};
        color: ${(props) => props.theme.text};
    }
    &.active {
        background: ${(props) => props.theme.hoverAside};
        color: ${(props) => props.theme.text};
    }
`;

export const Text = styled.span``;
