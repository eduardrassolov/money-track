import styled from 'styled-components'
import { IChartData } from './CategoryChart';
import { useUser } from '../../../utils/hooks/useUser';
import useCurrency from '../../../utils/hooks/useCurrency';

const StyledLegend = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.1rem;
`
const LegendItem = styled.div<{ $bgColor: string, $textColor: string, $isSelected: boolean }>`
    display: flex;
    justify-content: space-between;
    gap: 2rem;
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

    font-size: 0.9rem;
`

const Span = styled.span`
white-space: nowrap;
`


interface ICustomLegend {
    data: IChartData[],
    selected: string,
    onSelect: (id: string) => void,
}

export default function CustomLegend({ data, selected, onSelect }: ICustomLegend) {
    const sortedData = data.sort((a, b) => b.percentage - a.percentage);

    const { user } = useUser();
    const { defaultCurrency } = useCurrency(user?.user_metadata.currency);
    console.log(defaultCurrency);
    return (
        <StyledLegend>
            {sortedData?.map((entry) =>
                <LegendItem
                    key={entry.id}
                    id={entry.id}
                    $bgColor={entry?.color?.text || "rgba(62, 111, 210, 0.3)"}
                    $textColor={entry?.color?.fill || "rgb(62, 111, 210)"}
                    $isSelected={entry.id === selected}
                    onClick={() => onSelect(entry.id)} >

                    <span>
                        {entry.name}
                    </span>

                    <Span>
                        {defaultCurrency?.symbol} {entry.value.toFixed(2)} ({entry.percentage.toFixed(2)}%)
                    </Span>
                </LegendItem>
            )
            }
        </StyledLegend >
    )
}
