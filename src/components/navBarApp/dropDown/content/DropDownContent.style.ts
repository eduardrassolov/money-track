import { Content } from "@radix-ui/react-dropdown-menu";
import styled from "styled-components";

export const StyledContent = styled(Content)`
    background: ${(props) => props.theme.background};
    color: ${(props) => props.theme.text};
    border: 1px solid ${(props) => props.theme.border};
    min-width: 150px;
    display: flex;
    padding: 0.4rem;
    flex-direction: column;
    gap: 0.5rem;
    border-radius: 10px;
    box-shadow:
        0px 10px 38px -10px rgba(22, 23, 24, 0.35),
        0px 10px 20px -15px rgba(22, 23, 24, 0.2);
    margin: 0.2rem 1rem;
`;
