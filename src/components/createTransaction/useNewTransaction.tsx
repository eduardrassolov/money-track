import dayjs from 'dayjs';
import { useState } from 'react'
import NameTransaction from './nameTransaction/NameTransaction';
import AmountTransaction from './amount/AmountTransaction';
import CategoryTransaction from './category/CategoryTransaction';
import CurrencyTransaction from './currency/CurrencyTransaction';
import TimeCreatedTransaction from './timeTransaction/TimeCreatedTransaction';
import { User } from '@supabase/supabase-js';

const defaultTransaction = {
    description: "",
    amount: null,
    categoryId: "",
    timeCompleted: dayjs(new Date()).format("YYYY-MM-DD HH:mm")
}

export type TransactionProp = {
    onChange: (key: string, value: string) => void;
}

export default function useNewTransaction(user: User, type: number) {
    const { id: userId } = user;
    const userCurrency = user?.user_metadata.currency as string;

    const [transaction, setTransaction] = useState({
        ...defaultTransaction,
        currencyId: userCurrency,
        timeCompleted: dayjs(new Date()).format("YYYY-MM-DD HH:mm")
    });

    const handleChange = (key: string, value: string) => setTransaction((prev) => (
        {
            ...prev,
            [key]: value
        }));

    const reset = () => setTransaction((prev) => ({ ...prev, ...defaultTransaction }))

    const transactionDataArr = [
        <NameTransaction description={transaction.description} onChange={handleChange} />,
        <AmountTransaction amount={transaction.amount} onChange={handleChange} />,
        <CategoryTransaction categoryId={transaction.categoryId} onChange={handleChange} type={type} userId={userId} />,
        <CurrencyTransaction currencyId={transaction.currencyId} onChange={handleChange} />,
        <TimeCreatedTransaction timeCompleted={transaction.timeCompleted} onChange={handleChange} />
    ]

    return { transaction, changeData: handleChange, transactionDataArr, reset };
}
