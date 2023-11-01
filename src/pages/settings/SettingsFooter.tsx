import styled from "styled-components";
import { PrimaryBtn, SecondaryBtn } from "../../styles/Button";
import { useNavigate } from "react-router-dom";

export const StyledContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 0.5rem;
  margin: 0;
`;

export default function SettingsFooter() {
    const navigate = useNavigate();
    const handleBack = () => navigate(-1);

    return (
        <StyledContainer>
            <SecondaryBtn type="button" onClick={() => handleBack()}>Back</SecondaryBtn>
            <PrimaryBtn type="submit">Save</PrimaryBtn>
        </StyledContainer >
    )
}
