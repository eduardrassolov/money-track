import { styled } from "styled-components"
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../config/routes";

const Section = styled.section`
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
        height: 100vh;
        gap: 1rem;
        /* background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 1)), url("/main.jpg"); */
        background: ${props => props.theme.background};
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;

        color: ${props => props.theme.color};
        border-bottom: 2px solid ${props => props.theme.border};
        /* padding: 3rem 0 0 0; */
        padding: 1rem;

        transition: all 300ms;

    @media only screen and (min-width: 1100px){
        flex-direction: row;
        letter-spacing: 0.1rem;
    }
`

const TextContainer = styled.div`
    color: ${props => props.theme.text};
    display: flex;
    flex-direction: column;
    max-width: 450px;
    flex-wrap: wrap;

    @media only screen and (min-width: 1100px){
        margin: auto;
    }

`
interface IHeader {
    id: string
}

export const slideRight = {
    hidden: { x: -300 },
    visible: { x: 0 }
}

export const slideLeft = {
    hidden: { x: 300 },
    visible: { x: 0 }
}
export const slideUp = {
    hidden: { y: 200 },
    visible: { y: 0 }
}

const TitleText = styled.p`
    font-size: 1.1rem;
    line-height: 26px;
    color: gray;
    font-style: normal;
    font-weight: 400;
`
const CTAButton = styled.button`
    padding: 14px 20px;
    background: ${props => props.theme.colorLogoMain};
    border: 1px solid ${props => props.theme.colorLogoMain};
    border-radius: 7px;
    color: #fff;
    font-size: 1rem;
    cursor: pointer;
    transition: 300ms all;

    &:hover{
        border: 1px solid ${props => props.theme.border};
    }
`
const H2 = styled.h1`
    line-height: 72px;
    letter-spacing: -2.4px;
    font-size: 3rem;
    margin: 0;
`
const ImageContainer = styled.div`
    width: 100vw;
    max-width: 500px;

    @media only screen and (min-width: 1100px){
        margin: auto 0 0 auto;
        max-width: 700px;
    }
`

const Image = styled.img`
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
    border-radius: 7px;
    width: 100%;
`

const SmallImage = styled.img`
    position: absolute;
    z-index: 0;
    bottom: 0;
    left: 50%;
    width: 150px;
`


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
                <Image src="src/pages/home/Light.svg" />
                <SmallImage src="src/pages/home/Mockup.svg" />
            </ImageContainer>
        </Section >
    )
}
