
import AnimatedContainer from '../../../../components/animation/AnimatedContainer';
import { slideUp } from '../../../../config/animationCfg';
import { IFeatureData } from '../IFeatureData';

import { StyledFeaturesItem, ImageContainer, TextContainer } from './FeatureItem.style';

type FeatureSide = "left" | "right";
interface IFeature {
    data: IFeatureData;
    side: FeatureSide;
}

export default function FetItem({ data: { title, text, imgPath }, side }: IFeature) {

    return (
        <AnimatedContainer direction={slideUp}>
            <StyledFeaturesItem $side={side} >
                <TextContainer>
                    <h2>{title}</h2>
                    <p>{text}</p>
                </TextContainer>

                <ImageContainer>
                    <img src={imgPath} alt={`${title} image`} />
                </ImageContainer>
            </StyledFeaturesItem>
        </AnimatedContainer>
    )
}
