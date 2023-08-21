import { FC } from "react"

type StatsProps = {
    text: string;
    calcValue: number;
}

function formatNumberWithSpaces(number: number): string {
    const parts = number.toFixed(2).toString().split('.');
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
    return parts.join('.');
}

const Stats: FC<StatsProps> = ({ text, calcValue }) => {
    const formateValue = formatNumberWithSpaces(calcValue);
    return (
        <div>
            <p>{text}{formateValue}</p>
        </div>
    )
}
export default Stats;

