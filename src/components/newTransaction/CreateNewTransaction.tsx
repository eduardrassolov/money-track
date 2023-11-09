import styled from 'styled-components';
import { devices } from '../../config/breakPoints';
import TitleTrigger from './TitleTrigger';
import { useState } from 'react';
import TYPES_TRANSACTION from '../../config/typeTransactions';
import CreateTransaction from '../createTransaction/CreateTransaction';

export interface INewTransactionProps {
    type: number;
}

const StyledNewTransactionFrom = styled.div<{ $isOpen: boolean }>`
    /* border: ${props => props.$isOpen ? `1px solid ${props.theme.border}` : ""}; */
    background: ${(props) => props.theme.background};
    color: ${(props) => props.theme.text};
    padding: ${props => props.$isOpen ? "1rem 0" : "0"};
    
    border-radius: 7px;
    width: 100%;
    transition: all 300ms;

    display: flex;
    flex-direction: column;
    gap: 1rem;
    @media only screen and (min-width: ${devices.md}px) {
        min-width: 340px;
    }
`

export function CreateNewTransactionForm({ type }: INewTransactionProps) {
    const [isOpen, setOpen] = useState<boolean>(false);

    const handleOpenClose = () => setOpen(prev => !prev);

    const textForTitle: string = type === TYPES_TRANSACTION.INCOME ? "Income" : "Expense";

    return (
        <StyledNewTransactionFrom $isOpen={isOpen}>
            <TitleTrigger isOpen={isOpen} onOpenClose={handleOpenClose} text={textForTitle} />

            {isOpen ? <CreateTransaction type={type} /> : null}
        </StyledNewTransactionFrom>
    )
}
