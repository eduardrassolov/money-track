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
  /* background: ${props =>
    props.$bg === 'expenses' ? 'rgba(36, 143, 233, 0.05)' : 'rgba(142, 230, 20, 0.05)'}; */
   
  /* border: 1px solid ${props =>
    props.$bg === 'expenses' ? 'rgb(36, 143, 233)' : 'rgb(142, 230, 20)'}; */
  background: #fff;
  border-radius: 15px;
  border: 1px solid #fff;

  display: flex;
  margin: 0 0 0.8rem;
  padding: 1.5rem 1.8rem;
  justify-content: space-between;

  transition: all 300ms;

  &:hover{
     background: ${(props) => props.$bg === 'expenses' ? 'rgba(36, 143, 233, 0.05)' : 'rgba(142, 230, 20, 0.05)'};
     border: 1px solid ${(props) => props.$bg === 'expenses' ? 'rgb(36, 143, 233)' : 'rgb(142, 230, 20)'};
     cursor: pointer;
     transition: all 300ms;
  }
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
  console.log(item);
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