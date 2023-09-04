import { FC } from "react";
import { styled } from "styled-components";
interface ITransactionHeader {
  name: string;
}

const H4 = styled.h4`
  font-size: 1.2rem;
  font-weight: 500;
  margin: 0 0 1rem 0;
  word-break: break-all;
`;

const TransactionHeader: FC<ITransactionHeader> = ({ name }) => {
  return (
    <H4>{name}</H4>
  )
}
export default TransactionHeader;
