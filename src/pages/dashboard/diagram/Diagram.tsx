import { FC } from 'react'
import { styled } from 'styled-components'
import { Area, AreaChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from "recharts";
import { DiagramData } from '../createDiagramData';
import { CustomTooltip } from './CustomTooltip';
import Header from '../../../ui/header/Header';
import AnimatedContainer from '../../../components/animation/AnimatedContainer';
import { slideUp } from '../statCard/StatsList';

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
    label: string;
}

const Diagram: FC<IDiagramProps> = ({ data, label }) => {
    return (
        <>
            <AnimatedContainer duration={1} delay={0.2} direction={slideUp}>
                <ChartContainer>
                    <Header text={label} />
                    <AnimatedContainer>
                        <AreaChart width={1200} height={550} data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                            <Legend />
                            <defs>
                                <linearGradient id="colorExpense" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="rgb(36, 143, 233)" stopOpacity={0.6} />
                                    <stop offset="95%" stopColor="#rgb(255, 255, 255)" stopOpacity={0} />
                                </linearGradient>

                                <linearGradient id="colorIncome" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="rgb(142, 230, 20)" stopOpacity={0.6} />
                                    <stop offset="95%" stopColor="rgb(142, 230, 20)" stopOpacity={0} />
                                </linearGradient>
                            </defs>
                            <XAxis dataKey="completedAt" /><YAxis />

                            <Tooltip content={<CustomTooltip />} />

                            <Area type="monotone" dataKey="Expense" stroke="rgb(36, 143, 233)" fillOpacity={1} fill="url(#colorExpense)" />
                            <Area type="monotone" dataKey="Income" stroke="rgb(142, 230, 20)" fillOpacity={1} fill="url(#colorIncome)" />

                            {/* <CartesianGrid strokeDasharray="4" fillOpacity={0.2} /> */}
                        </AreaChart>
                    </AnimatedContainer>
                </ChartContainer>
            </AnimatedContainer>
        </>

    )
}
export default Diagram;

