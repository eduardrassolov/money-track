import { FC } from "react";
import { ITransaction } from "../../interface/ITransactions";
import TransactionFooter from "./TransactionFooter";
import TransactionHeader from "./TransactionHeader";
import { Container, InfoSection, OperationSection, StyledEdit, StyledIcon } from "./TransactionCard.style";
import AnimatedContainer from "../animation/AnimatedContainer";

interface ITransactionProps {
  item: ITransaction;
  onDelete: (id: number) => void;
  onEdit: (id: number) => void;
  index?: number;
}

const TransactionCard: FC<ITransactionProps> = ({ item, onDelete, onEdit, index = 1 }) => {
  return (
    <AnimatedContainer duration={0.9} delay={0.1 * index} animateOnStart={true}>
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
    </AnimatedContainer>
  )
}

export default TransactionCard;