
import React from 'react';
import { StyledInput } from '../../input/Input'
import { TransactionProp } from '../useNewTransaction';
import { StyledDescriptions, TitleText } from '../nameTransaction/NameTransaction.style';

type AmountTransactionProps = TransactionProp & {
    amount: number | null,
}

export default function AmountTransaction({ amount, onChange }: AmountTransactionProps) {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { target: { value } } = e;
        onChange("amount", value);
    }
    return (
        <StyledDescriptions>
            <TitleText>Amount transaction:</TitleText>

            <StyledInput
                type="number"
                value={amount as number}
                onChange={handleChange}
                placeholder="Enter amount of transaction"
                autoFocus />
        </StyledDescriptions>
    )
}