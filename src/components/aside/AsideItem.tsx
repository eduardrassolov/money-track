import { Span, StyledNavLink } from "./AsideItem.style";

type AsideItemProps = {
    name: string;
    icon: JSX.Element;
    handleBurger: () => void;
}

export default function AsideItem({ name, icon, handleBurger }: AsideItemProps) {

    //TODO refactor magic formatting 
    const ref = name.toLowerCase() === 'home' ? '/' : `/app/${name.toLowerCase()}`
    return (
        <li>
            <StyledNavLink to={ref} onClick={handleBurger}>
                {icon} <Span>{name}</Span>
            </StyledNavLink>
        </li>
    )
}
