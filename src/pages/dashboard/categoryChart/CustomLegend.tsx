import styled from 'styled-components'

const StyledLegend = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
`
const LegendItem = styled.div<{ $color: string }>`
    color: ${props => props.$color};
    display: flex;
    justify-content: space-between;
`

export default function CustomLegend({ payload }) {
    return (
        <StyledLegend>{
            payload.map((entry, index) => {
                return (
                    <LegendItem $color={entry.color} key={index}>
                        <span>
                            {entry.value}
                        </span>
                    </LegendItem>
                )

            })
        }</StyledLegend>
    )
}
