import styled from 'styled-components';
import { devices } from '../../styles/breakPoints';
import TitleTrigger from './TitleTrigger';
import { FC, useState } from 'react';
import NewForm from './NewForm';
import TYPES_TRANSACTION from '../../config/typeTransactions';
import useResize from '../../pages/dashboard/pie/useResize';

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

    @media only screen and (min-width: ${devices.md}px) {
        min-width: 340px;
    }
`

const CreateNewTransactionForm: FC<INewTransactionProps> = ({ type }) => {
    const { isSmallScreen } = useResize();
    const [isOpen, setOpen] = useState<boolean>(!isSmallScreen);

    const handleOpenClose = () => setOpen(prev => !prev);

    const textForTitle: string = type === TYPES_TRANSACTION.INCOME ? "Add new income" : "Add new expense";

    return (
        <StyledNewTransactionFrom $isOpen={isOpen}>
            <TitleTrigger isOpen={isOpen} onOpenClose={handleOpenClose} text={textForTitle} />

            {isOpen ?
                <NewForm type={type} />
                : ""}

        </StyledNewTransactionFrom >
    )
}
export default CreateNewTransactionForm;
