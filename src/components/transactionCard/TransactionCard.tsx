import { FC } from "react";
import { ITransaction } from "../../interface/ITransactions";
import TransactionFooter from "./TransactionFooter";
import TransactionHeader from "./TransactionHeader";
import { Container, InfoSection, OperationSection, StyledEdit, StyledIcon } from "./TransactionCard.style";
import AnimatedContainer from "../animation/AnimatedContainer";
import { slideUp } from "../../pages/home/HeaderSection";

interface ITransactionProps {
  item: ITransaction;
  onDelete: (id: number) => void;
  onEdit: (id: number) => void;
}

const TransactionCard: FC<ITransactionProps> = ({ item, onDelete, onEdit }) => {

  return (
    <AnimatedContainer direction={slideUp} duration={0.5} delay={0} animateOnStart={true}>
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