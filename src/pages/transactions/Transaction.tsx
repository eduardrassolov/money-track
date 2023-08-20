import { FC } from "react";

import { styled } from "styled-components";
import TransactionHeader from "./TransactionHeader";
import TransactionFooter from "./TransactionFooter";
import { ITransaction } from "../../interface/ITransactions";

interface ITransactionProps {
  item: ITransaction;
  onDelete: (id: number) => void;
}

const Container = styled.div`
  border: 1px solid #ccc;
  max-width: 450px;
  display: flex;
  width: 90%;
  margin: 0 auto 10px;
  padding: 10px;
  border-radius: 15px;
  box-shadow: 0 0 10px rgba(0,0,0,0.15);
  justify-content: space-between;
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

const Transaction: FC<ITransactionProps> = ({ item, onDelete }) => {
  return (
    <Container>
      <InfoSection>
        <TransactionHeader name={item.description} />
        <TransactionFooter item={item} />
      </InfoSection>

      <OperationSection>
        <button onClick={() => onDelete(item.id)}>Delete</button>
      </OperationSection>
    </Container>
  )
}
export default Transaction;