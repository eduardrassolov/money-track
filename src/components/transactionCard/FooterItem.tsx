import { FC } from "react";
import { styled } from "styled-components";

type Title = string | number;
interface IFooterItemProps {
  title: Title;
  icon?: JSX.Element;
}

const Div = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.2rem;
  border: 1px solid #ccc;
  border-radius: 7px;
  padding: 0.2rem 0.5rem;

  span{
    font-size: 0.8rem;
    margin-left: 0.2rem;
  }
`

const FooterItem: FC<IFooterItemProps> = ({ title, icon }) => {
  return (
    <Div>
      {icon} <span> {title}</span>
    </Div>
  )
}
export default FooterItem;