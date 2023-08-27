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
    props.$bg === 'expenses' ? 'rgba(36, 143, 233, 0.05)' : 'rgba(142, 230, 20, 0.05)'};
  border: 1px solid ${props =>
    props.$bg === 'expenses' ? 'rgb(36, 143, 233)' : 'rgb(142, 230, 20)'};
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(4.1px);
  -webkit-backdrop-filter: blur(4.1px);

  display: flex;
  /* margin: 0 auto 10px auto; */
  margin: 0 0 0.8rem;
  padding: 1rem 1.5rem;
  justify-content: space-between;

  @media (max-width: 800px) {
    margin: 0 0 10px;
  }
`
const InfoSection = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 1rem 0 0;
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
  console.log(item.type);
  return (
    <Container $bg={item.type.name}>
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