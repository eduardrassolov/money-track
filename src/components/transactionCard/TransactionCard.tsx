import { FC } from "react";
import { ITransaction } from "../../interface/ITransactions";
import TransactionFooter from "./TransactionFooter";
import TransactionHeader from "./TransactionHeader";
import { Container, InfoSection, OperationSection, StyledEdit, StyledIcon } from "./TransactionCard.style";
import AnimatedContainer from "../animation/AnimatedContainer";
import dayjs from "dayjs";
import styled from "styled-components";

import TYPES_TRANSACTION from "../../config/typeTransactions";


interface ITransactionProps {
  item: ITransaction;
  onDelete: () => void;
  onEdit: () => void;
  index?: number;
}

const Title = styled.span`
  font-size: 1.1rem;
  font-weight: 500;
  color: ${props => props.theme.text};
`

const SmallText = styled.span`
  font-size: 0.9rem;
`

const Time = styled.span`
  color: gray;
  font-size: 0.9rem;
`

const Price = styled(SmallText) <{ $typeTransaction: string }>`
  color: ${props => props.$typeTransaction};
`

const CenterDiv = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
`

const CategoryDiv = styled(CenterDiv)`
  
`
const PriceDiv = styled(CenterDiv)`
  justify-content: flex-end;
`

const OpetaionsContainer = styled.div`
  grid-row: 2;
  grid-column: 1/4;
  display: flex;
  justify-content: flex-end;
  gap: 0.3rem;
`


const TransactionCard: FC<ITransactionProps> = ({ item, onDelete, onEdit, index = 1 }) => {
  const { description, amount, completedAt, category, currency, type, id } = item;

  const formattedTime = dayjs(completedAt).format("DD MMMM YYYY HH:mm");
  const formattedAmount = new Intl.NumberFormat("en-IN", { style: "currency", currency: currency?.shortName || "USD" }).format(amount);

  const formattedPrice = type.id === TYPES_TRANSACTION.EXPENSE ? "red" : "green";
  const typeTransaction = type.id === TYPES_TRANSACTION.EXPENSE ? "-" : "+";

  return (
    <AnimatedContainer duration={0.9} delay={0.1 * index} animateOnStart={true}>
      <Container $bg={""}>
        <InfoSection>
          <Title>{description}</Title>
          <Time>{formattedTime}</Time>
        </InfoSection>

        <CategoryDiv>
          <SmallText>{category.name}</SmallText>
        </CategoryDiv>

        <PriceDiv>
          <Price $typeTransaction={formattedPrice}>{typeTransaction} {formattedAmount}</Price>
        </PriceDiv>

        <OpetaionsContainer>
          <button onClick={onEdit}>edit</button>
          <button onClick={onDelete}>delete</button>
        </OpetaionsContainer>
      </Container>
    </AnimatedContainer >
  )
}

export default TransactionCard;