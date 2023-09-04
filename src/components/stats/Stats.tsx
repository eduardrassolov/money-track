import { FC } from "react"
import { styled } from "styled-components";
import formatNumberWithSpaces from "../../utils/helpers/formatWithSpace";

type StatsProps = {
    listType: string;
    calcValue: number;
    currency?: string;
    size?: string;
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

const Stats: FC<StatsProps> = ({ listType, calcValue, currency = "$" }) => {
    const formatedValue = formatNumberWithSpaces(calcValue);

    return (
        <H3>Total {listType}: <span>{currency}{formatedValue}</span></H3>
    )
}
export default Stats;

