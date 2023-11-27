import AnimatedContainer from "../../../animation/AnimatedContainer";
import { HiArrowSmallRight } from "react-icons/hi2";
import { Span, StyledNumber } from "./StepLineItem.style";

interface ITimeLineItem {
    item: any;
    index: number;
    currentStep: number;
    length: number;
}

export default function TimeLineItem({ item, index, currentStep, length }: ITimeLineItem) {
    return (
        <>
            <AnimatedContainer delay={0.1 * index}>
                <StyledNumber $isHighlight={index <= currentStep}> {item} </StyledNumber>
            </AnimatedContainer>
            {index <= length - 2 ? (
                <Span $isHighlight={index <= currentStep - 1}>
                    <AnimatedContainer delay={0.1 * index}>
                        <HiArrowSmallRight />
                    </AnimatedContainer>
                </Span>
            ) : (
                ""
            )}
        </>
    );
}
