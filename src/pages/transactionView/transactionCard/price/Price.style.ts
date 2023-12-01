import styled from "styled-components";
import { SmallText } from "../category/CategoryCard.style";

export const Div = styled.div`
    display: flex;
    justify-content: flex-end;
`;

export const StyledPrice = styled(SmallText)<{ $typeTransaction: string }>`
    color: ${(props) => props.$typeTransaction};
`;
