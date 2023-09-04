import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
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
        };
    });
};
const CategoryChart = ({ data }) => {
    const { isSmallScreen } = useResize();
    console.log(isSmallScreen);
    const dt = createData(data);
    const size = 100;
    return (_jsx(_Fragment, { children: _jsx(ResponsiveContainer, { width: "100%", height: 350, children: _jsxs(PieChart, { children: [_jsx(Pie, { dataKey: "value", isAnimationActive: false, data: dt, cx: "50%", cy: "50%", outerRadius: size, innerRadius: size / 2, fill: "#8884d8", paddingAngle: 3, children: data.map((_, index) => (_jsx(Cell, { fill: pieChartColors[index] }, `cell-${index}`))) }), _jsx(Tooltip, {}), _jsx(Legend, { align: isSmallScreen ? 'center' : 'right', verticalAlign: isSmallScreen ? 'bottom' : 'middle', layout: "vertical", iconSize: 15, iconType: "circle" })] }) }) }));
};
export default CategoryChart;
