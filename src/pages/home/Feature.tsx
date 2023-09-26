import { FC } from 'react'
import { styled } from 'styled-components'
import { IFeatureData } from './FeaturesSection'
import { devices } from '../../styles/breakPoints';
import AnimatedContainer from '../../components/animation/AnimatedContainer';
import { slideUp } from './HeaderSection';

const FeaturesItem = styled.div<{ $side: string }>`
    display: flex;
    flex-direction: column;
    text-align: center;
    max-width: 800px;
    margin: 0 auto;

    @media only screen and (min-width: ${devices.md}px){
        flex-direction: ${props => props.$side === "left" ? 'row' : 'row-reverse'};
        justify-content: center;
        gap: 6rem;
    }
`

const TextContainer = styled.div`
    max-width: 500px;
    margin: 0 auto 1rem;

    h2{
        letter-spacing: -0.5px;
        font-size: 2rem;
        line-height: 2rem;
        margin: 1rem auto 0.8rem;
    }
    p{
        line-height: 1.5rem;
        color: #878585;
        font-size: 1rem;
        max-width: 400px;
        margin: 0 auto;
    }

    @media only screen and (min-width: ${devices.md}px){
        text-align: left;
    }
`

const ImageContainer = styled.div`
    @media only screen and (min-width: ${devices.md}px){
        display: flex;
        align-items: center;
        justify-items: center;
    }
`

type FeatureSide = "left" | "right";

interface IFeature {
    data: IFeatureData;
    side: FeatureSide;
}

const Feature: FC<IFeature> = ({ data: { title, text, imgPath }, side }) => {

    return (
        <AnimatedContainer direction={slideUp}>
            <FeaturesItem $side={side} >
                    <TextContainer>
                        <h2>{title}</h2>
                        <p>{text}</p>
                    </TextContainer>

                    <ImageContainer>
                        <img src={imgPath} alt={`${title} image`} />
                    </ImageContainer>
            </FeaturesItem> 
        </AnimatedContainer>
    )
}
export default Feature;
