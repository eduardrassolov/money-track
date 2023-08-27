import { FC } from "react";
import { styled } from "styled-components";

interface IProps {
  name: string;
}


const H4 = styled.h4`
  font-size: 1.3rem;
  font-weight: 500;
  margin: 0 0 1rem 0;
  word-break: break-all;

`;

const TransactionHeader: FC<IProps> = ({ name }) => {
  return (

    <H4>{name}</H4>

  )
}
export default TransactionHeader;
