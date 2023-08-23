import { useSearchParams } from "react-router-dom";
import { styled } from "styled-components";

const Div = styled.div`
    display: flex;
    gap: 1rem;
`


export default function Filter() {
    const [, setParams] = useSearchParams();

    const handleClick = (text: string) => {
        if (text === 'all') {
            setParams({});
        }
        else {
            setParams({ filter: text });
        }
    }

    return (
        <Div>
            <button onClick={() => handleClick("today")}>Today</button>
            <button onClick={() => handleClick("last-week")}>Last week</button>
            <button onClick={() => handleClick("last-month")}>Last month</button>
            <button onClick={() => handleClick("all")}>All</button>
        </Div>
    )
}
