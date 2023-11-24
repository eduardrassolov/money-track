import { FC } from "react";
import { ITransaction } from "../../../interface/ITransactions";
import { Container, InfoSection } from "./TransactionCard.style";
import AnimatedContainer from "../../animation/AnimatedContainer";
import dayjs from "dayjs";
import styled from "styled-components";

import TYPES_TRANSACTION from "../../../config/typeTransactions";
import { useBoundStore } from "../../../store/store";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import { DiRasberryPi } from "react-icons/di";
import { devices } from "../../../config/breakPoints";

interface ITransactionProps {
  item: ITransaction;
  onDelete: () => void;
  onEdit: (id: number) => void;
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
  font-size: 0.9rem;
  white-space: nowrap;
`

const CenterDiv = styled.div`
  display: flex;
  justify-content: start;
  align-items: start;

  @media only screen and (min-width: ${devices.sm}px){

  }

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

const IconButton = styled.button`
  border: 1px solid ${props => props.theme.border};
  color: ${props => props.theme.text};
  background: transparent;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.3rem;
  padding: 0.4rem 0.7rem;
  border-radius: 10px;
  transition: 300ms all;

  &:hover{
    border: 1px solid ${props => props.theme.colorLogoMain};
  }

  span{
    font-size: 0.8rem;
  }
  `
const Div = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
`
const Icon = styled.span`
  background: ${props => props.theme.background2};
  display: flex;
  padding: 0.5rem;
  border-radius: 50%;
`

const TransactionCard: FC<ITransactionProps> = ({ item, onDelete, onEdit, index = 1 }) => {
  const { description, amount, completedAt, category, currency, type, id } = item;

  const formattedTime = dayjs(completedAt).format("DD MMMM YYYY HH:mm");
  const formattedAmount = new Intl.NumberFormat("en-IN", { style: "currency", currency: currency?.shortName || "USD" }).format(amount);

  const theme = useBoundStore((state) => state.theme);

  const formattedPrice = type.id === TYPES_TRANSACTION.EXPENSE ? theme.expensePrice : theme.incomePrice;
  const typeTransaction = type.id === TYPES_TRANSACTION.EXPENSE ? "-" : "+";

  return (
    <AnimatedContainer duration={0.9} delay={0.1 * index} animateOnStart={true}>
      <Container $bg={""}>
        <Div>
          <Icon><DiRasberryPi size={"1.5rem"} /></Icon>
          <InfoSection>
            <Title>{description}</Title>
            <Time>{formattedTime}</Time>
          </InfoSection>
        </Div>

        <CategoryDiv>
          <SmallText>{category.name}</SmallText>
        </CategoryDiv>

        <PriceDiv>
          <Price $typeTransaction={formattedPrice}>{typeTransaction} {formattedAmount}</Price>
        </PriceDiv>

        <OpetaionsContainer>
          <IconButton onClick={() => onEdit(id)}><AiOutlineEdit size={"1rem"} /><span>edit</span></IconButton>
          <IconButton onClick={onDelete}><AiOutlineDelete size={"1rem"} /> <span>delete</span></IconButton>
        </OpetaionsContainer>
      </Container>
    </AnimatedContainer >
  )
}

export default TransactionCard;