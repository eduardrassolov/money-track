import { Cell, Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import useResize from "../useResize";
import { ISummary } from "../../../utils/helpers/getStats";
import { FC } from "react";

const pieChartColors = [
    "#FF3D68",
    "#FFC658",
    "#D63AFF",
    "#FF9F33",
    "#8A3FFC",
    "#3F8CFC",
    "#3FFCB0",
    "#3FB2FC",
    "#5BFF6A",
    "#FFEB3F",
    "#A3FF3F",
    "#E6FF3F",
    "#FFC33F",
    "#FF684B",
];

interface IChartData {
    name: string,
    value: number
}

interface ICategoryChart {
    data: Array<ISummary>
}

const createData = (arr: Array<ISummary>): Array<IChartData> => {
    return arr.map((category) => {
        return {
            name: `${category.name} - ${category.percentage}%`,
            value: category.value
        }
    })
}

const CategoryChart: FC<ICategoryChart> = ({ data }) => {
    const { isSmallScreen } = useResize();

    console.log(isSmallScreen);
    const dt = createData(data);
    const size = 100;

    return (
        <>
            <ResponsiveContainer width="100%" height={350}>
                <PieChart>
                    <Pie
                        dataKey="value"
                        isAnimationActive={false}
                        data={dt}
                        cx="50%"
                        cy="50%"
                        outerRadius={size}
                        innerRadius={size / 2}
                        fill="#8884d8"
                        paddingAngle={3}
                    >
                        {data.map((_, index) => (
                            <Cell key={`cell-${index}`} fill={pieChartColors[index]} />
                        ))}
                    </Pie>
                    <Tooltip />
                    <Legend
                        align={isSmallScreen ? 'center' : 'right'}
                        verticalAlign={isSmallScreen ? 'bottom' : 'middle'}
                        layout="vertical"
                        iconSize={15}
                        iconType="circle"
                    />

                </PieChart>
            </ResponsiveContainer >
        </>
    )
}

export default CategoryChart