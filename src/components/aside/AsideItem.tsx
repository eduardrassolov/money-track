import { Span, StyledNavLink } from "./AsideItem.style";

type Props = {
    name: string;
    icon: JSX.Element;
}

export default function AsideItem({ name, icon }: Props) {

    //TODO refactor magic formatting 
    const ref = name.toLowerCase() === 'home' ? '/' : `/app/${name.toLowerCase()}`
    return (
        <li>
            <StyledNavLink to={ref}>
                {icon} <Span>{name}</Span>
            </StyledNavLink>
        </li>
    )
}
