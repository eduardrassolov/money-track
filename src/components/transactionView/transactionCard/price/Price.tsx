import React from 'react'
import { SmallText } from '../category/CategoryCard.style';
import { Div, StyledPrice } from './Price.style';

export default function Price({ amount, currency, colorTransaction }) {
    const formattedAmount = new Intl.NumberFormat("en-IN", { style: "currency", currency: currency?.shortName || "USD" }).format(amount);
    return (
        <Div>
            <StyledPrice $typeTransaction={colorTransaction}>{formattedAmount}</StyledPrice>
        </Div>
    )
}
