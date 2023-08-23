import { FC } from 'react'
import { styled } from 'styled-components'
import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { ITransaction } from '../../interface/ITransactions';
import TYPES_TRANSACTION from '../../config/typeTransactions';

const ChartContainer = styled.div`
  width: 100%;
  border: 1px solid #ccc;
  padding: 2rem 0;
  border-radius: 7px;
`

interface IDiagramProps {
    data: ITransaction[];
}

function formatDate(date: Date) {
    return date.toLocaleDateString('en-GB', { day: 'numeric', month: 'numeric' });
}

const Diagram: FC<IDiagramProps> = ({ data }) => {
    const diagramData = data.map((transaction) => {
        return {
            name: formatDate(new Date(transaction.completedAt)),
            Expenses: transaction.typeTransaction?.id === TYPES_TRANSACTION.EXPENSE ? transaction.amount : 0,
            Incomes: transaction.typeTransaction?.id === TYPES_TRANSACTION.INCOME ? transaction.amount : 0,
        }
    })

    return (
        <ChartContainer>
            <ResponsiveContainer width="100%" height={350}>
                <LineChart data={diagramData} margin={{
                    top: 20, right: 20, bottom: 20, left: 20,
                }}>
                    <CartesianGrid strokeDasharray="2 2 2" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="Expenses" stroke="rgb(36, 143, 233)" />
                    <Line type="monotone" dataKey="Incomes" stroke="rgb(142, 230, 20)" />
                </LineChart>
            </ResponsiveContainer>
        </ChartContainer>
    )
}
export default Diagram;