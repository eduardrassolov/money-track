import { FC } from "react";
import { styled } from "styled-components";
import { ITransaction } from "../../interface/ITransactions";
import { FaRegTrashAlt } from 'react-icons/fa'
import TransactionFooter from "./TransactionFooter";
import TransactionHeader from "./TransactionHeader";


interface ITransactionProps {
  item: ITransaction;
  onDelete: (id: number) => void;
}

const Container = styled.div<{ $bg: string }>`
  background: ${props =>
    props.$bg === 'expenses' ? 'rgba(36, 143, 233, 0.05)' : 'rgba(0, 255, 17, 0.05)'};
  border: 1px solid ${props =>
    props.$bg === 'expenses' ? 'rgb(36, 143, 233)' : 'rgb(0, 255, 17)'};
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(4.1px);
  -webkit-backdrop-filter: blur(4.1px);

  max-width: 450px;
  display: flex;
  width: 90%;
  margin: 0 auto 10px;
  padding: 1rem 1.5rem;



  justify-content: space-between;

  @media (max-width: 800px) {
    margin: 0 5px 10px;
    max-width: 100%;
  }
`
const InfoSection = styled.div`
  display: flex;
  flex-direction: column;
`
const OperationSection = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`

const StyledIcon = styled(FaRegTrashAlt)`
  font-size: 1.3rem;
  cursor: pointer;
  
  &:hover{
    transform: scale(1.1);
    transition: all 0.4s ease-in-out;
  }
`

const TransactionCard: FC<ITransactionProps> = ({ item, onDelete }) => {
  return (
    <Container $bg={item.typeTransaction?.name}>
      <InfoSection>
        <TransactionHeader name={item.description} />
        <TransactionFooter item={item} />
      </InfoSection>

      <OperationSection>
        <StyledIcon onClick={() => onDelete(item.id)} />
      </OperationSection>
    </Container >
  )
}
export default TransactionCard;