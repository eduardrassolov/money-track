import React from 'react'
import { ISummary } from '../../../utils/helpers/getStats';
import Header from '../../../ui/header/Header';
import CategoryChart from '../categoryChart/CategoryChart';
import styled from 'styled-components';
import AnimatedContainer from '../../../components/animation/AnimatedContainer';
import { slideUp } from '../statCard/StatsList';

interface IPieDiagram {
    label: string;
    data: ISummary[];
}

const StyledContainer = styled.div`
    /* background: ${props => props.theme.backgound} ; */
   background: ${prev => prev.theme.background};
   border-radius: 12px;
   padding: 2rem 1rem;
`

export default function PieDiagram({ label, data }: IPieDiagram) {
    return (
        <AnimatedContainer direction={slideUp}>
            <StyledContainer>
                <Header text={label} />
                <CategoryChart data={data} />
            </StyledContainer>
        </AnimatedContainer>

    )
}
