import { Span, StyledNavLink } from "./AsideItem.style";

type AsideItemProps = {
    name: string;
    icon: JSX.Element;
    onClose: () => void;
}

export default function AsideItem({ name, icon, onClose }: AsideItemProps) {

    //TODO refactor magic formatting 
    const ref = name.toLowerCase() === 'home' ? '/' : `/app/${name.toLowerCase()}`
    return (
        <li>
            <StyledNavLink to={ref} onClick={onClose}>
                {icon} <Span>{name}</Span>
            </StyledNavLink>
        </li>
    )
}
