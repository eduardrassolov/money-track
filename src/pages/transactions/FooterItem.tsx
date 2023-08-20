import { FC } from "react";

type Title = string | number;
interface IFooterItemProps {
  title: Title;
}

const FooterItem: FC<IFooterItemProps> = ({ title }) => {
  return (
    <span>{title}</span>
  )
}
export default FooterItem;