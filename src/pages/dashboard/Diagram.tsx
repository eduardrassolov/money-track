import { FC } from 'react'
import { styled } from 'styled-components'
import { Area, AreaChart, CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from "recharts";
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
        // <ChartContainer>
        //         <LineChart width={1000} height={350} data={data} margin={{
        //             top: 20, right: 20, bottom: 20, left: 20,
        //         }}>
        //             <XAxis dataKey="completedAt" />
        //             <YAxis />
        //             <Tooltip />
        //             <Legend />
        //             <Line type="monotone" dataKey="Expense" stroke="rgb(36, 143, 233)" />
        //             <Line type="monotone" dataKey="Income" stroke="rgb(142, 230, 20)" />
        //         </LineChart>
        // </ChartContainer >
        <ChartContainer>
            <AreaChart width={1000} height={350} data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                <Legend />
                <defs>
                    <linearGradient id="colorExpense" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="rgb(36, 143, 233)" stopOpacity={0.6}/>
                        <stop offset="95%" stopColor="#rgb(255, 255, 255)" stopOpacity={0}/>
                    </linearGradient>

                    <linearGradient id="colorIncome" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="rgb(142, 230, 20)" stopOpacity={0.6}/>
                        <stop offset="95%" stopColor="rgb(142, 230, 20)" stopOpacity={0}/>
                    </linearGradient>
                </defs>
                <XAxis dataKey="completedAt" /><YAxis />

                <Tooltip />
                
                <Area type="monotone" dataKey="Expense" stroke="rgb(36, 143, 233)" fillOpacity={1} fill="url(#colorExpense)" />
                <Area type="monotone" dataKey="Income" stroke="rgb(142, 230, 20)" fillOpacity={1} fill="url(#colorIncome)" />
            </AreaChart>
        </ChartContainer>
        
    )
}
export default Diagram;