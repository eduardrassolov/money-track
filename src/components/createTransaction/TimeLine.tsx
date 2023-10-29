
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
export default function TimeLine({ maxLength, currentStep }: ITimeLine) {
    const numbers = new Array<number>(maxLength).fill().map((_, i) => i + 1);

    return (
        <Container>
            {
                numbers.map((item, index: number) =>
                    <TimeLineItem
                        key={`time_line_item${index}`}
                        item={item}
                        index={index}
                        currentStep={currentStep}
                        length={numbers?.length || 0} />
                )
            }
        </Container >
    )
}
