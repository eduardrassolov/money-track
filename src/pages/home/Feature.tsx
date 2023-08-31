import React, { FC } from 'react'
import { styled } from 'styled-components'
import { IFeatureData } from './FeaturesSection'
import { devices } from '../../styles/breakPoints'


const FeaturesItem = styled.div<{ $side: string }>`
    display: flex;
    flex-direction: column;
    margin: 0 auto 3rem;
    text-align: center;
    max-width: 700px;


    @media only screen and ${devices.md}{
        flex-direction: ${props => props.$side === "left" ? 'row' : 'row-reverse'};
        justify-content: center;
        gap: 4rem;
    }
`

const TextContainer = styled.div`
    max-width: 500px;
    margin: 0 auto 2rem;

    h2{
        letter-spacing: -0.5px;
        font-size: 2rem;
        line-height: 2rem;
    }
    p{
        line-height: 1.5rem;
        color: #878585;
        font-size: 1rem;
        max-width: 400px;
        margin: 0 auto;
    }

    @media only screen and ${devices.md}{
        text-align: left;
    }
`

const ImageContainer = styled.div`
    @media only screen and ${devices.md}{
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
    console.log(side);
    return (
        <FeaturesItem $side={side}>
            <TextContainer>
                <h2>{title}</h2>
                <p>{text}</p>
            </TextContainer>
            <ImageContainer>
                <img src={imgPath} alt={`${title} image`} />
            </ImageContainer>
        </FeaturesItem>
    )
}
export default Feature;
