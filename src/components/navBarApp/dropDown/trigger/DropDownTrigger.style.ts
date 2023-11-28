import styled from "styled-components";
import { Trigger } from "@radix-ui/react-dropdown-menu";

export const StyledTrigger = styled(Trigger)`
    background: ${(props) => props.theme.background};
    border: none;
`;
