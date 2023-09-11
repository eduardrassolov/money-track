import { FC } from 'react'
import { styled } from 'styled-components'
import { Legend, Line, LineChart, Tooltip, XAxis, YAxis } from "recharts";
import { DiagramData } from './createDiagramData';

const ChartContainer = styled.div`
  width: 100%;
  border: 1px solid ${(props) => props.theme.background};
  background: ${(props) => props.theme.background};
  color: ${(props) => props.theme.text};
  padding: 2rem 0;
  border-radius: 15px;
  overflow: scroll;
    transition: all 300ms;
`
interface IDiagramProps {
    data: Array<DiagramData>;
}

const Diagram: FC<IDiagramProps> = ({ data }) => {
    return (
        <ChartContainer>
            {/* <ResponsiveContainer width={1000} height={350}> */}
                <LineChart width={1000} height={350} data={data} margin={{
                    top: 20, right: 20, bottom: 20, left: 20,
                }}>
                    <XAxis dataKey="completedAt" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="Expense" stroke="rgb(36, 143, 233)" />
                    <Line type="monotone" dataKey="Income" stroke="rgb(142, 230, 20)" />
                </LineChart>
            {/* </ResponsiveContainer> */}
        </ChartContainer >
    )
}
export default Diagram;