import { Cell, Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import useResize from "../useResize";

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

const createData = (arr) => {
    return arr.map((category) => {
        return {
            name: `${category.name} - ${category.percentage}%`,
            value: category.value
        }
    })
}

export default function CategoryChart({ data }) {
    const { isSmallScreen } = useResize();

    console.log(isSmallScreen);
    const dt = createData(data);
    console.log(dt);
    const size = 100;
    return (
        <>
            <ResponsiveContainer width="100%" height={350}>
                <PieChart width="100%">
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
                        {data.map((entry, index) => (
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
            </ResponsiveContainer>
        </>
    )
}
