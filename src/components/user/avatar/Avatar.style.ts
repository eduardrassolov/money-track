import styled from "styled-components";

export const AvatarContainer = styled.div`
    color: #3b82f6;
    border-radius: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 100ms ease-in-out;

    &:hover {
        scale: 1.05;
        cursor: pointer;
        transition: all 300ms ease-in-out;
    }
`;
