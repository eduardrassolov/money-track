import { FC } from "react"
import { styled } from "styled-components";

type StatsProps = {
    text: string;
    calcValue: number;
    currency?: string;
}

const H3 = styled.h3`
    font-size: 1.2rem;
    text-align: center;
    font-weight: 400;
    letter-spacing: 0.2rem;

    span{
        font-weight: 600;
        letter-spacing: 0.1rem;

    }
`

function formatNumberWithSpaces(number: number): string {
    const parts = number.toFixed(2).toString().split('.');
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
    return parts.join('.');
}

const Stats: FC<StatsProps> = ({ text, calcValue, currency = "$" }) => {
    const formateValue = formatNumberWithSpaces(calcValue);
    return (
        <H3>{text}<span>{currency}{formateValue}</span></H3>
    )
}
export default Stats;

