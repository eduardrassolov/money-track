import { FC } from 'react'
import { styled } from 'styled-components'
import { CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from "recharts";
import { ITransaction } from '../../interface/ITransactions';
import { useLoaderData } from 'react-router-dom';

const ChartContainer = styled.div`
  width: 100%;
  border: 1px solid #ccc;
  padding: 2rem 1rem;
  border-radius: 7px;
`

interface IDiagramProps {
    data: ITransaction[];
}


const Diagram: FC<IDiagramProps> = ({ data }) => {


    console.log(data);

    const dt = useLoaderData()
    console.log('dt', dt);

    return (
        <ChartContainer>
            <LineChart width={600} height={250} data={[]}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="Expenses" stroke="#8884d8" />
                <Line type="monotone" dataKey="Incomes" stroke="#82ca9d" />
            </LineChart>
        </ChartContainer>
    )
}
export default Diagram;