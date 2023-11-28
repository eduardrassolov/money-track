import { ICurrency } from '../../../../utils/hooks/useCurrency';
import { Div, StyledPrice } from './Price.style';

interface IPrice {
    amount: number,
    currency: ICurrency,
    colorTransaction: string
}

export default function Price({ amount, currency, colorTransaction }: IPrice) {
    const formattedAmount = new Intl.NumberFormat("en-IN", { style: "currency", currency: currency?.shortName || "USD" }).format(amount);
    return (
        <Div>
            <StyledPrice $typeTransaction={colorTransaction}>{formattedAmount}</StyledPrice>
        </Div>
    )
}
