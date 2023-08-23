import { FC } from "react";
import { styled } from "styled-components";
import { StatsCardData } from "../../types/statsCardData";

interface IStatCardProps {
    item: StatsCardData;
    value: string | number;
}

const IconContainer = styled.div<{ $bgColor?: string }>`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.8rem;
    background-color: ${(props) => props.$bgColor};
    border-radius: 50%;
    color: #102C57;
    border: 1px solid #ccc;
    width: 50px;
    height: 50px;
    transition: all 300ms ease-in-out;
`
const StatContainer = styled.div<{ $borderColor?: string, $bgColor?: string }>`
    display: flex;
    align-items: center;
    border: 1px solid #ccc;
    border-radius: 7px;
    padding: 0.8rem 1rem; 
    transition: all 300ms ease-in-out;

    h3, p{
        margin: 0;
        padding: 0;
    }
    h3{
        font-size: 1rem;
        font-weight: normal;
        letter-spacing: 0.05rem;
    }
    p{
        font-size: 0.8rem;
        font-weight: 400;
    }

    &:hover{
        transform: scale(1.01) translateY(-5px);
        border: 1px solid ${(props) => props.$borderColor};
        box-shadow: 0px 6px 16px 1px rgba(0,0,0,0.2);  

        ${IconContainer}{
            border: 1px solid ${(props) => props.$borderColor};
        }
    }
`

const Description = styled.div`
    display: flex;
        flex-direction: column;
        gap: 0.5rem;
        font-size: 0.8rem;
        margin: auto 1rem;
`

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
