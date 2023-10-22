import { Cell, Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import useResize from "../pie/useResize";
import { ISummary } from "../../../utils/helpers/getStats";
import { FC, useState } from "react";
import styled from "styled-components";

import CustomLegend from "./CustomLegend";
import { useCurrStore } from "../../../store/store";

import useDefaultCurrency from "../../../utils/hooks/useDefaultCurrency";
import { pieChartColors } from "../../../config/chartPieColors.ts";

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

export const CustomTooltip: React.FC<CustomTooltipProps> = ({ active, payload }) => {


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
            color: pieChartColors[index]
        }
    });
};

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
    function handleClick(id: string) {
        console.log("clicked", id);
        setSelect(id);
    }

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
                            fill={item.id === selected ? item?.color?.fill || "rgb(62, 111, 210)" : theme.background}
                            stroke={theme.border}
                            strokeWidth={2}
                            onClick={() => handleClick(item.id)}
                            style={{ cursor: "pointer" }}
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

            </PieChart>
        </ResponsiveContainer >
    )
}

export default CategoryChart