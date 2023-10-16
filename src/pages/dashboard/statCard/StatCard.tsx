import { FC } from "react";
import { StatsCardData } from "../../../types/statsCardData";
import { Description, IconContainer, StatsContainer } from "./StatCard.style.ts";
import useDefaultCurrency from "../../../utils/hooks/useDefaultCurrency.tsx";
import formatNumberWithSpaces from "../../../utils/helpers/formatWithSpace.ts";
import AnimatedContainer from "../../../components/animation/AnimatedContainer.tsx";

interface IStatCardProps {
    item: StatsCardData;
    value: number;
    index: number;
}

const StatCard: FC<IStatCardProps> = ({ item: { iconBg, borderColor, name, icon }, value, index }) => {
    if (value === Number.POSITIVE_INFINITY ||
        value === Number.NEGATIVE_INFINITY ||
        isNaN(value)) {
        return null;
    }

    const { defaultCurrencyName } = useDefaultCurrency();
    const formatedValue = formatNumberWithSpaces(value, defaultCurrencyName?.shortName || "USD");

    return (

        <AnimatedContainer delay={0.2 * index} duration={1}>
            <StatsContainer $borderColor={borderColor}>
                <IconContainer $bgColor={iconBg}>
                    {icon}
                </IconContainer>

                <Description>
                    <h3>{name}:</h3>

                    {name === "Coefficent" ?
                        <p>{value} %</p>
                        :
                        <p>{formatedValue}</p>
                    }
                </Description>
            </StatsContainer>
        </AnimatedContainer>
    )
}
export default StatCard
