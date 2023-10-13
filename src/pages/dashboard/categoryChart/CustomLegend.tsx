import styled from 'styled-components'

import { devices } from '../../../styles/breakPoints';
import { IChartData } from './CategoryChart';
import AnimatedContainer from '../../../components/animation/AnimatedContainer';
import { slideUp } from '../statCard/StatsList';

const StyledLegend = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.1rem;

    @media only screen and (min-width: ${devices.sm}px){
        margin:  auto auto auto 2rem;
        width: 300px;
    }
`
const LegendItem = styled.div<{ $bgColor: string, $textColor: string, $isSelected: boolean }>`
    display: flex;
    justify-content: space-between;
    gap: 1rem;
    padding: 0.5rem 1rem;

    background: ${props => props.$isSelected ? props.$bgColor : props.theme.background};
    color: ${props => props.$isSelected ? props.$textColor : props.theme.text};
    border-radius: 7px;
    transition: all 300ms;

    &:hover{
        cursor: pointer;    
        background: ${props => props.$bgColor};
        color: ${props => props.$textColor};
    }
`

interface ICustomLegend {
    data: IChartData[],
    selected: string,
    onSelect: (id: string) => void,
}

export default function CustomLegend({ data, selected, onSelect }: ICustomLegend) {
    const sortedData = data.sort((a, b) => b.percentage - a.percentage);

    return (
        <StyledLegend>{
            sortedData.map((entry, index) => {
                return (

                    <AnimatedContainer delay={0.05 * index} direction={slideUp}>
                        <LegendItem key={entry.id} id={entry.id} $bgColor={entry.color.text} $textColor={entry.color.fill} $isSelected={entry.id === selected} onClick={() => onSelect(entry.id)} >
                            <span>
                                {entry.name}
                            </span>
                            <span>
                                {/* {defaultCurrency?.symbol} {entry.value} ({Number.parseFloat(entry.percentage).toFixed(2)}%) */}
                                {entry.percentage.toFixed(2)}%
                            </span>
                        </LegendItem>

                    </AnimatedContainer>
                )

            })
        }
        </StyledLegend >
    )
}
