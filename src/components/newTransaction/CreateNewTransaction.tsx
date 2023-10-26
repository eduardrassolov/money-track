import styled from 'styled-components';
import { devices } from '../../styles/breakPoints';
import TitleTrigger from './TitleTrigger';
import { FC, useState } from 'react';
import TYPES_TRANSACTION from '../../config/typeTransactions';
import useResize from '../../pages/dashboard/pie/useResize';
import NewTransaction from '../createTransaction/newTransaction';

export interface INewTransactionProps {
    type: number;
}

const StyledNewTransactionFrom = styled.div<{ $isOpen: boolean }>`
    border: 1px solid ${(props) => props.theme.border};
    background: ${(props) => props.theme.background};
    color: ${(props) => props.theme.text};
    padding: ${props => props.$isOpen ? "1.5rem 1.5rem 1rem" : "0.2rem 1rem"};
    
    border-radius: 7px;
    width: auto;
    transition: all 300ms;
    margin: auto auto 1rem;

    display: flex;
    flex-direction: column;
    gap: 1rem;
    @media only screen and (min-width: ${devices.md}px) {
        min-width: 340px;
    }
`

const CreateNewTransactionForm: FC<INewTransactionProps> = ({ type }) => {
    const [isOpen, setOpen] = useState<boolean>(false);

    const handleOpenClose = () => setOpen(prev => !prev);

    const textForTitle: string = type === TYPES_TRANSACTION.INCOME ? "Add new income" : "Add new expense";

    return (
        <StyledNewTransactionFrom $isOpen={isOpen}>
            <TitleTrigger isOpen={isOpen} onOpenClose={handleOpenClose} text={textForTitle} />

            {isOpen ?
                <>
                    <NewTransaction type={1} />
                    {/* <NewForm type={1} /> */}
                </>
                : ""}

        </StyledNewTransactionFrom >
    )
}
export default CreateNewTransactionForm;
