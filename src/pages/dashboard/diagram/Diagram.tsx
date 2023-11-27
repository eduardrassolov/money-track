import { Area, AreaChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import dayjs from 'dayjs';

import createDiagramData from '../createDiagramData';
import { CustomTooltip } from './CustomTooltip';

import { ITransaction } from '../../../interface/ITransactions';

import LoadingUi from '../../../components/spinner/LoadingUi';
import convertToOneCurrency from '../../../services/createData';
import { useBoundStore } from '../../../store/store';
import { useUserSettings } from "../../../utils/hooks/useUserSettings";

import { Container, Div } from "./Diagram.style";

interface IDiagramProps {
    transactions: Array<ITransaction> | undefined;
    userId: string;
    isLoading: boolean
}

export default function Diagram({ transactions, isLoading, userId }: IDiagramProps) {
    const { userSettings } = useUserSettings(userId);

    const symbol = userSettings?.defaultCurrency?.symbol;
    const currency = userSettings?.defaultCurrency || "USD";

    const [from, to] = useBoundStore(state => state.range);
    const isDayRange = from === to ? "DD-MMM-YYYY HH:mm" : "DD-MMM-YYYY";

    const convertedTransactions = convertToOneCurrency(transactions, currency);
    const dataDiagram = createDiagramData(convertedTransactions, isDayRange);

    return (
        <>
            {!transactions?.length ? "" :
                <Container>
                    <Div>
                        <h1>Diagram</h1>
                    </Div>

                    <ResponsiveContainer width={"100%"} height={500}>
                        {isLoading ? <LoadingUi /> :
                            <AreaChart data={dataDiagram} margin={{ top: 20, right: 30, left: 50, bottom: 20 }}>
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
                                <Legend />

                                <Area dataKey="Income" stroke={"#72cb72"} fill={"url(#colorIncome)"} dot={true} />
                                <Area dataKey="Expense" stroke={"#f5d4d5"} fill={"url(#colorExpense)"} dot={true} animationDuration={2000} />

                                <XAxis
                                    dataKey="completedAt"
                                    axisLine={false}
                                    tickLine={false}
                                    tickCount={5}
                                    tickFormatter={(date) => {
                                        const formatLine = from === to ? "HH:mm" : "DD MMM";
                                        return dayjs(date).format(formatLine);
                                    }}
                                />
                                <YAxis tickLine={false} axisLine={false} tickCount={8} tickFormatter={(amount) => `${symbol}${amount}`} />

                                <Tooltip content={<CustomTooltip currency={currency} />} />
                                <CartesianGrid strokeDasharray="0.5" stroke="gray" opacity={0.2} vertical={false} />

                            </AreaChart>
                        }
                    </ResponsiveContainer>
                </Container>
            }
        </>
    )
}

