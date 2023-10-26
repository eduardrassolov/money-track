
import styled from "styled-components"
import TimeLineItem from "./TimeLineItem"

const Container = styled.div`
    display: flex;
    justify-content: space-around;
`

interface ITimeLine {
    stepsList: number[],
    currentStep: number

}
export default function TimeLine({ stepsList, currentStep }: ITimeLine) {

    return (
        <Container>
            {
                stepsList?.map((item, index: number) =>
                    <TimeLineItem
                        key={`time_line_item${index}`}
                        item={item}
                        index={index}
                        currentStep={currentStep}
                        length={stepsList?.length || 0} />
                )
            }
        </Container >
    )
}
