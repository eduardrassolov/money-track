import { FC } from 'react'
import { styled } from 'styled-components'
import { Area, AreaChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { DiagramData } from '../createDiagramData';
import { CustomTooltip } from './CustomTooltip';
import AnimatedContainer from '../../../components/animation/AnimatedContainer';
import { slideUp } from '../statCard/AnalyticsList';
import dayjs from 'dayjs';
import { Header } from '../../../ui/header/Header';

const ChartContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid ${(props) => props.theme.border};
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

const Diagram: FC<IDiagramProps> = ({ data, currency, label }) => {
    const { shortName, symbol } = currency;
    console.log(data);
    return (
        <>
            {data?.length ?
                // <AnimatedContainer duration={1} delay={0.2} direction={slideUp}>
                <ChartContainer>
                    <Header text={label} />
                    <ResponsiveContainer width="95%" height={500}>
                        <AreaChart data={data} margin={{ top: 20, right: 30, left: 50, bottom: 0 }}>
                            <defs>
                                <linearGradient id="colorExpense" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="0%" stopColor="#c28794" stopOpacity={0.7} />
                                    <stop offset="75%" stopColor="#c28794" stopOpacity={0.05} />
                                </linearGradient>

                                <linearGradient id="colorIncome" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="0%" stopColor="#5cc49b" stopOpacity={0.7} />
                                    <stop offset="75%" stopColor="#5cc49b" stopOpacity={0.05} />
                                </linearGradient>
                            </defs>

                            <Area dataKey="Income" stroke={"#72cb72"} fill={"url(#colorIncome)"} />
                            <Area dataKey="Expense" stroke={"#f5d4d5"} fill={"url(#colorExpense)"} />

                            <XAxis
                                dataKey="completedAt"
                                axisLine={false}
                                tickLine={false}
                                tickCount={5}
                                tickFormatter={(date) => new Date(date).getDate() % 2 === 0 ? dayjs(date).format("DD MMM") : ""}
                            />
                            <YAxis tickLine={false} axisLine={false} tickCount={8} tickFormatter={(amount) => `${symbol}${amount}`} />

                            <Tooltip content={<CustomTooltip />} />
                            <CartesianGrid strokeDasharray="0.5" stroke="gray" opacity={0.2} vertical={false} />

                            {/* <Area dataKey="Income" /> */}


                            {/* <Legend /> */}
                            {/* <defs>
                                <linearGradient id="colorExpense" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="0%" stopColor="rgb(36, 143, 233)" stopOpacity={0.6} />
                                    <stop offset="95%" stopColor="#rgb(255, 255, 255)" stopOpacity={0.05} />
                                </linearGradient>

                                <linearGradient id="colorIncome" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="0%" stopColor="rgb(142, 230, 20)" stopOpacity={0.6} />
                                    <stop offset="95%" stopColor="rgb(142, 230, 20)" stopOpacity={0.05} />
                                </linearGradient>
                            </defs> */}
                            {/* <XAxis dataKey="completedAt" axisLine={false} />
                            <YAxis tickCount={8} tickLine={false}
                                tickFormatter={(amount) => Intl.NumberFormat("en-IN", { style: "currency", currency: shortName }).format(amount)}
                            /> */}
                            {/* <YAxis dataKey={"Income"} /> */}


                            {/* <Tooltip content={<CustomTooltip />} /> */}
                            {/* 
                            <Area type="monotone" dataKey="Expense" stroke="rgb(36, 143, 233)" fillOpacity={1} fill="url(#colorExpense)" />
                            <Area type="monotone" dataKey="Income" stroke="rgb(142, 230, 20)" fillOpacity={1} fill="url(#colorIncome)" /> */}

                            {/* <CartesianGrid strokeDasharray="0.5" stroke="gray" opacity={0.2} /> */}
                        </AreaChart>
                    </ResponsiveContainer>
                </ChartContainer >
                // </AnimatedContainer>
                : ""}
        </>

    )
}
export default Diagram;

