import styled from "styled-components";
import { StyledDescriptions, TitleText } from "../nameTransaction/NameTransaction.style";

export const StyledDIv = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.1rem;
`;

export const StyledDiv = styled.div`
    display: flex;
    align-items: center;
    gap: 0.6rem;
    font-size: 1.5rem;
`;
export const CustomCategoryText = styled.p<{ $isSelected: boolean }>`
    background: ${(props) => (props.$isSelected ? props.theme.colorLogoMain : "")};
    padding: 0.5rem 0 0.5rem 1rem;
    margin: 0;
    width: 100%;
    font-size: 1rem;
    cursor: pointer;
    border-radius: 7px;

    &:hover {
        background: ${(props) => props.theme.colorLogoMain};
        color: #fff;
    }
`;

export const Descriptions = styled(StyledDescriptions)`
    gap: 1.5rem;
`;
export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.3rem;
`;
export const Text = styled(TitleText)`
    color: gray;
`;

export const StyledTitle = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
`;
