import { StyledDiv } from "./CustomToolltip.style";

type payloadType = {
    value: string | number;
    name: string;
};
interface CustomTooltipProps {
    active?: boolean;
    payload?: payloadType[];
    currencySymbol: string
}

export default function CustomTooltip({ active, payload, currencySymbol }: CustomTooltipProps) {
    if (active && payload && payload.length > 0) {
        return (
            <StyledDiv>
                <p>{`${payload[0].name} : ${currencySymbol} ${payload[0]?.value} `}</p>
            </StyledDiv>
        )
    }
    return null;
};