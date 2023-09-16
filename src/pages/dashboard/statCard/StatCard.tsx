import { FC } from "react";
import { StatsCardData } from "../../../types/statsCardData";
import { Description, IconContainer, StatContainer } from "./StatCard.style.ts";
import useDefaultCurrency from "../../../utils/hooks/useDefaultCurrency.tsx";
import formatNumberWithSpaces from "../../../utils/helpers/formatWithSpace.ts";

interface IStatCardProps {
    item: StatsCardData;
    value: number;
}

const StatCard: FC<IStatCardProps> = ({ item: { iconBg, borderColor, name, icon }, value }) => {
    if (value === Number.POSITIVE_INFINITY || value === Number.NEGATIVE_INFINITY || value === Number.NaN) {
        return null;
    }

    const { defaultCurrency } = useDefaultCurrency();
    const formatedValue = formatNumberWithSpaces(value);

    return (
        <>
            <StatContainer $borderColor={borderColor}>
                <IconContainer $bgColor={iconBg}>
                    {icon}
                </IconContainer>

                <Description>
                    <h3>{name}</h3>

                    {name === "Coefficent" ?
                        <p>{value} %</p>
                        :
                        <p>{defaultCurrency} {formatedValue}</p>
                    }
                </Description>
            </StatContainer>
        </>
    )
}
export default StatCard
