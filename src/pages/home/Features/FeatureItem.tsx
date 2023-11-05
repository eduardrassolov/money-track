import { IFeatureData } from './FeaturesSection';
import AnimatedContainer from '../../../components/animation/AnimatedContainer';
import { slideUp } from '../../../config/animationCfg';
import { FeaturesItem, ImageContainer, TextContainer } from './FeatureItem.style';

type FeatureSide = "left" | "right";
interface IFeature {
    data: IFeatureData;
    side: FeatureSide;
}

export default function ({ data: { title, text, imgPath }, side }: IFeature) {

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
