import { FC } from "react";
import { ITransaction } from "../../interface/ITransactions";
import TransactionFooter from "./TransactionFooter";
import TransactionHeader from "./TransactionHeader";
import { Container, InfoSection, OperationSection, StyledIcon } from "./TransactionCard.style";

interface ITransactionProps {
  item: ITransaction;
  onDelete: (id: number) => void;
}

const TransactionCard: FC<ITransactionProps> = ({ item, onDelete }) => {
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