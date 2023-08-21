import { FC } from "react"

type StatsProps = {
    text: string;
    calcValue: number;
}

const Stats: FC<StatsProps> = ({ text, calcValue }) => {
    return (
        <div>
            <p>{text}{calcValue}</p>
        </div>
    )
}
export default Stats