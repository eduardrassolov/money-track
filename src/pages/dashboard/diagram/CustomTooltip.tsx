import styled from "styled-components";
import { useUser } from "../../../utils/hooks/useUser";
import useCurrency from "../../../utils/hooks/useCurrency";

export const StyledTooltip = styled.div`
    padding: 0.5rem 1rem;
    background: ${(props) => props.theme.background};
    border: 1px solid ${(props) => props.theme.border};
    border-radius: 7px;
    color: ${(props) => props.theme.text};
    justify-content: center;
    align-items: center;

    p{
        margin: 0 0 0.3rem;
        font-size: 0.8rem;
    }
`
export const Title = styled.h4`
    font-size: 1rem;
    margin: 0.5rem 0 1rem;
`

interface CustomTooltipProps {
    active?: boolean;
    payload?: payloadType[];
    label?: number;
    }
    
    type payloadType = {
    value: string | number;
    name: string;
};

export const CustomTooltip: React.FC<CustomTooltipProps> = ({active, payload, label}) => {
    const {currency} = useUser();
    const {defaultCurrency} = useCurrency(currency);
    
    if (active && payload && payload.length > 0) {
        return <StyledTooltip>
            <Title>{label}</Title>
            <p>{`${payload[0].name} : ${defaultCurrency?.symbol} ${payload[0]?.value}`}</p>
            <p>{`${payload[1].name} :  ${defaultCurrency?.symbol} ${payload[1]?.value}`}</p>
        </StyledTooltip>;
    }
    return null;
};