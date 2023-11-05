import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../../config/routes";
import { CTAButton, H2, Image, ImageContainer, Section, SmallImage, TextContainer, TitleText } from "./HeaderSection.style.ts";

interface IHeader {
    id: string
}

export default function HeaderSection({ id }: IHeader) {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate(ROUTES.LOGIN);
    }
    return (
        <Section id={id}>
            <TextContainer>
                <H2>Welcome to Your Financial Hub </H2>

                <TitleText>Say hello to financial clarity and take control of your financial journey with our intuitive Expense and Income Tracking App.</TitleText>

                <CTAButton onClick={handleClick}>Start now</CTAButton>
            </TextContainer >

            <ImageContainer>
                <Image src="/Browser.svg" alt="Browser" />
                <SmallImage src="/Phone.svg" alt="Phone" />
            </ImageContainer>
        </Section >
    )
}
