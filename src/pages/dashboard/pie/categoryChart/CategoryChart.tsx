import { Cell, Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import { useState } from "react";

import useResize from "../useResize.tsx";
import { ISummary } from "../../../../utils/helpers/getStats.ts";
import CustomLegend from "./legend/CustomLegend.tsx";
import { useBoundStore } from "../../../../store/store.tsx";
import { pieChartColors } from "../../../../config/chartPieColors.ts";
import { CustomTooltip } from "./tooltip/CustomTooltip.tsx";

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
    data: Array<ISummary>,
}

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

export function CategoryChart({ data }: ICategoryChart) {
    //TODO fix this
    const { isSmallScreen } = useResize();

    const dt: IChartData[] = createData(data);

    const size = 125;
    const defaultPading = data.length === 1 ? 0 : 3;
    const defaultHeight = isSmallScreen ? 50 : 20;

    const [selected, setSelect] = useState<string>("");
    const handleSelect = (id: string) => setSelect(prev => prev === id ? "" : id);

    const theme = useBoundStore((state) => state.theme);

    function handleClick(id: string) {
        setSelect(id);
    }

    return (
        <ResponsiveContainer width="100%" height={500 + (defaultHeight * dt.length)}>
            <PieChart>
                <Pie
                    dataKey="value"
                    data={dt}
                    cx="50%"
                    cy="50%"
                    outerRadius={size}
                    innerRadius={size / 1.8}
                    paddingAngle={defaultPading}
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
                    verticalAlign={"bottom"}
                    align="center"
                    layout={"vertical"}
                    content={<CustomLegend data={dt} selected={selected} onSelect={handleSelect} />}
                />

            </PieChart>
        </ResponsiveContainer >
    )
}