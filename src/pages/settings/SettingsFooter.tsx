import styled from "styled-components";
import { PrimaryBtn, SecondaryBtn } from "../../styles/Button";

export const StyledContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 0.5rem;
  margin: 2rem 0 1rem;
`;

export default function SettingsFooter() {
    return (
        <StyledContainer>
            <SecondaryBtn type="button">Back</SecondaryBtn>
            <PrimaryBtn type="submit">Save</PrimaryBtn>
        </StyledContainer>
    )
}
