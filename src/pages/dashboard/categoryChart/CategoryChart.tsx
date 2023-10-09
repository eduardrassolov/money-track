import { Cell, Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import useResize from "../useResize";
import { ISummary } from "../../../utils/helpers/getStats";
import { FC, useState } from "react";
import styled from "styled-components";

import CustomLegend from "./CustomLegend";
import { useCurrStore } from "../../../store/store";

import useDefaultCurrency from "../../../utils/hooks/useDefaultCurrency";

const colors = [
    {
        fill: "rgb(190, 80, 80)",
        text: "rgba(190, 80, 80, 0.1)",
        selected: "rgba(190, 80, 80, 0.3)"
    },

    {
        fill: "rgb(169, 169, 248)",
        text: "rgba(169, 169, 248, 0.1)",
        selected: "rgba(169, 169, 248, 0.3)"
    },
    {
        fill: "rgb(230, 130, 85)",
        text: "rgba(230, 130, 85, 0.1)",
        selected: "rgba(230, 130, 85, 0.3)"
    },
    {
        fill: "rgb(245, 157, 245)",
        text: "rgba(245, 157, 245, 0.1)",
        selected: "rgba(245, 157, 245, 0.3)"
    },
    {
        fill: "rgb(118, 188, 188)",
        text: "rgba(118, 188, 188, 0.1)",
        selected: "rgba(118, 188, 188, 0.3)"
    },
    {
        fill: "rgb(216, 173, 133)",
        text: "rgba(216, 173, 133, 0.1)",
        selected: "rgba(216, 173, 133, 0.3)"
    },
    {
        fill: "rgb(148, 112, 220)",
        text: "rgba(148, 112, 220, 0.1)",
        selected: "rgba(148, 112, 220, 0.3)"
    },
    {
        fill: "rgb(62, 111, 210)",
        text: "rgba(62, 111, 210, 0.1)",
        selected: "rgba(62, 111, 210, 0.3)"
    },
    {
        fill: "rgb(204, 204, 255)",
        text: "rgba(204, 204, 255, 0.1)",
        selected: "rgba(204, 204, 255, 0.3)"
    },
    {
        fill: "rgb(255, 165, 79)",
        text: "rgba(255, 165, 79, 0.1)",
        selected: "rgba(255, 165, 79, 0.3)"
    },
]

export interface IChartData {
    id: string,
    name: string,
    value: number,
    percentage: number,
    color: {
        fill: string,
        text: string,
        selected: string

    }
}

interface ICategoryChart {
    data: Array<ISummary>
}

const StyledDiv = styled.div`
    background: ${props => props.theme.background};
    color: ${props => props.theme.text};
    padding: 0.5rem 1rem;
    border-radius: 7px;
    border: 1px solid ${props => props.theme.border};
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

export const CustomTooltip: React.FC<CustomTooltipProps> = ({ active, payload, label }) => {

    console.log("Label", label);
    if (active && payload && payload.length > 0) {
        return <StyledDiv>
            <p>{`${payload[0].name} : ${payload[0]?.value}`}</p>
        </StyledDiv>;
    }
    return null;
};

const createData = (arr: Array<ISummary>): Array<IChartData> => {
    return arr.map((category, index) => {
        return {
            id: `summarry-pie-${category.name}-${index}`,
            name: category.name,
            percentage: category.percentage,
            value: category.value,
            color: colors[index]
        }
    })
}

const CategoryChart: FC<ICategoryChart> = ({ data }) => {
    const { isSmallScreen } = useResize();
    const dt: IChartData[] = createData(data);

    const size = isSmallScreen ? 125 : 175;
    const defaultPading = data.length === 1 ? 0 : 3;
    const defaultHeight = isSmallScreen ? 50 : 20;

    const [selected, setSelect] = useState<string>("");
    const handleSelect = (id: string) => setSelect(prev => prev === id ? "" : id);

    const theme = useCurrStore((state) => state.theme);

    const { defaultCurrency } = useDefaultCurrency();

    return (
        <ResponsiveContainer width="100%" height={350 + (defaultHeight * dt.length)}>
            <PieChart>
                <Pie
                    dataKey="value"
                    isAnimationActive={false}
                    data={dt}
                    cx="50%"
                    cy="50%"
                    outerRadius={size}
                    innerRadius={size / 2}
                    paddingAngle={defaultPading}
                    label={({ value }) => `${defaultCurrency} ${value}`}
                >

                    {dt.map((item, index) => {
                        return <Cell
                            key={`cell - ${index} `}
                            fill={item.id === selected ? item.color.fill : theme.background}
                            stroke={theme.border}
                            strokeWidth={2}
                        />
                    }
                    )}
                </Pie>

                <Tooltip content={<CustomTooltip />} />

                <Legend
                    verticalAlign={isSmallScreen ? "bottom" : "top"}
                    align="left"
                    layout={isSmallScreen ? "horizontal" : "vertical"}
                    content={<CustomLegend data={dt} selected={selected} onSelect={handleSelect} />}
                />
                {/* <Legend content={<CustomLegend />} /> */}

            </PieChart>
        </ResponsiveContainer >
    )
}

export default CategoryChart