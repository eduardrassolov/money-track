import { useState } from 'react';
import styled from 'styled-components'
import { useUser } from '../../../utils/hooks/useUser';
import useCurrency from '../../../utils/hooks/useCurrency';

const StyledLegend = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.3rem;
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

export default function CustomLegend({ payload, data, selected, onSelect }) {
    const sortedData = data.sort((a, b) => b.percentage - a.percentage);
    const { currency } = useUser();
    const { defaultCurrency } = useCurrency(currency);

    return (
        <StyledLegend>{
            sortedData.map((entry, index) => {
                return (
                    <LegendItem key={entry.id} id={entry.id} $bgColor={entry.color.text} $textColor={entry.color.fill} $isSelected={entry.id === selected} onClick={() => onSelect(entry.id)}>
                        <span>
                            {entry.name}
                        </span>
                        <span>
                            {/* {defaultCurrency?.symbol} {entry.value} ({Number.parseFloat(entry.percentage).toFixed(2)}%) */}
                            {Number.parseFloat(entry.percentage).toFixed(2)}%
                        </span>
                    </LegendItem>
                )

            })
        }</StyledLegend >
    )
}
