import { useNavigate } from "react-router-dom";
import { SecondaryBtn, PrimaryBtn } from "../../../styles/Button.style";
import { StyledContainer } from "./SettingsFooter.style";

export default function SettingsFooter() {
    const navigate = useNavigate();
    const handleBack = () => navigate(-1);

    return (
        <StyledContainer>
            <SecondaryBtn type="button" onClick={() => handleBack()}>Cancel</SecondaryBtn>
            <PrimaryBtn type="submit">Save</PrimaryBtn>
        </StyledContainer >
    )
}
