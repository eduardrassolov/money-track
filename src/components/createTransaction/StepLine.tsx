import styled from "styled-components"
import TimeLineItem from "./TimeLineItem"

const Container = styled.div`
    display: flex;
    justify-content: space-around;
`

interface ITimeLine {
    maxLength: number,
    currentStep: number

}
export default function StepLine({ maxLength, currentStep }: ITimeLine) {
    const stepNumbers = Array.from({ length: maxLength }, (_, i) => i + 1);

    return (
        <Container>
            {
                stepNumbers.map((item, index: number) =>
                    <TimeLineItem
                        key={`time_line_item${index}`}
                        item={item}
                        index={index}
                        currentStep={currentStep}
                        length={stepNumbers?.length || 0} />
                )
            }
        </Container >
    )
}
