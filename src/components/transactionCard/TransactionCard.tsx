import { FC } from "react";
import { ITransaction } from "../../interface/ITransactions";
import TransactionFooter from "./TransactionFooter";
import TransactionHeader from "./TransactionHeader";
import { Container, InfoSection, OperationSection, StyledEdit, StyledIcon } from "./TransactionCard.style";
import { HiOutlinePencilSquare } from "react-icons/hi2";

interface ITransactionProps {
  item: ITransaction;
  onDelete: (id: number) => void;
  onEdit: (id: number) => void;
}

const TransactionCard: FC<ITransactionProps> = ({ item, onDelete, onEdit }) => {

  return (
    <Container $bg={item.type.name}>
      <InfoSection>
        <TransactionHeader name={item.description} />
        <TransactionFooter item={item} />
      </InfoSection>

      <OperationSection>
        <StyledEdit onClick={() => onEdit(item.id)} />
        <StyledIcon onClick={() => onDelete(item.id)} />
      </OperationSection>
    </Container >
  )
}
export default TransactionCard;