import { FC } from "react";
import { StatsCardData } from "../../../types/statsCardData";
import { Description, IconContainer, StatContainer } from "./StatCard.style";

interface IStatCardProps {
    item: StatsCardData;
    value: string | number;
}

const StatCard: FC<IStatCardProps> = ({ item: { iconBg, borderColor, name, icon }, value }) => {
    return (
        <>
            <StatContainer $borderColor={borderColor}>
                <IconContainer $bgColor={iconBg}>
                    {icon}
                </IconContainer>

                <Description>
                    <h3>{name}</h3>
                    <p>{value}</p>
                </Description>
            </StatContainer>
        </>
    )
}
export default StatCard
