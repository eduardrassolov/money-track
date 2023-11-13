import styled from "styled-components";
import { useUser } from "../../../utils/hooks/useUser";
import useCurrency from "../../../utils/hooks/useCurrency";
import dayjs from "dayjs";
import { useBoundStore } from "../../../store/store";

export const StyledTooltip = styled.div`
    background: ${(props) => props.theme.background};
    border: 1px solid ${(props) => props.theme.border};
    border-radius: 0.30rem;
    color: ${(props) => props.theme.text};
    justify-content: center;
    align-items: center;
    padding: 1rem;  
    box-shadow: 15px 30px 40px 5px rgba(0, 0, 0, 0.3);

    p{
        margin: 0 0 0.3rem;
        font-size: 0.8rem;
    }
`
export const Title = styled.h4`
    font-size: 1rem;
    margin: 0.5rem 0 1rem;
`

interface CustomTooltipProps {
    active?: boolean;
    payload?: payloadType[];
    label?: number;
}

type payloadType = {
    value: string | number;
    name: string;
};


export const CustomTooltip: React.FC<CustomTooltipProps> = ({ active, payload, label }) => {
    if (!payload || !active || !payload.length) {
        return null;
    }

    const { currency } = useUser();
    const { defaultCurrency: { shortName } } = useCurrency(currency);


    const [from, to] = useBoundStore(state => state.range);
    const isDayRange = from === to ? "dddd, DD-MMM-YYYY HH:mm" : "dddd, DD-MMM-YYYY";

    const formattedLable = dayjs(label).format(isDayRange);

    const [income, expense] = payload;;
    const { name: incomeTitle, value: incomeAmount } = income;
    const { name: expenseTitle, value: expenseAmount } = expense;

    const formattedIncomeAmount = Intl.NumberFormat("en-IN", { style: "currency", currency: shortName }).format(incomeAmount);
    const formattedExpenseAmount = Intl.NumberFormat("en-IN", { style: "currency", currency: shortName }).format(expenseAmount);

    return (
        <StyledTooltip>
            <Title>{formattedLable}</Title>
            <p>{`${incomeTitle} : ${formattedIncomeAmount}`}</p>
            <p>{`${expenseTitle} : ${formattedExpenseAmount}`}</p>
        </StyledTooltip>
    )
};