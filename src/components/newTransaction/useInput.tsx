import { useState } from "react";

const defaultState = {
    description: '',
    amount: 1,
}

const useInputHandle = () => {
    const [description, setDescription] = useState(defaultState.description);
    const [amount, setAmount] = useState(defaultState.amount);

    const handleInput = (e: React.FormEvent<HTMLInputElement>) => {
        switch (e.currentTarget.name) {
            case 'description':
                setDescription(e.currentTarget.value);
                break;
            case 'amount':
                setAmount(Number(e.currentTarget.value));
                break;
            default:
                break;
        }
    }
    const clearInputs = () => {
        setDescription(defaultState.description);
        setAmount(defaultState.amount);
    }

    return { description, amount, handleInput, clearInputs };
}

export default useInputHandle;