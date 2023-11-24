import styled from "styled-components";

type payloadType = {
    value: string | number;
    name: string;
};


interface CustomTooltipProps {
    active?: boolean;
    payload?: payloadType[];
    label?: number;
}

const StyledDiv = styled.div`
    background: ${props => props.theme.background};
    color: ${props => props.theme.text};
    padding: 0.5rem 1rem;
    border-radius: 7px;
    border: 1px solid ${props => props.theme.border};
`


export const CustomTooltip: React.FC<CustomTooltipProps> = ({ active, payload }) => {
    if (active && payload && payload.length > 0) {
        return <StyledDiv>
            <p>{`${payload[0].name} : ${payload[0]?.value}`}</p>
        </StyledDiv>;
    }
    return null;
};