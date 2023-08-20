import { NavLink } from "react-router-dom";
import { styled } from "styled-components"


const StyledNavLink = styled(NavLink)`
    display: flex;
    text-decoration: none;
    padding: 0.8rem 1rem;
    color: #000;
    transition: background-color 0.3s ease-in-out;

    &:hover {
        background-color: #e0e0e0;
    }
    &.active {
        background-color: #c0c0c0;
    }
`

type Props = {
    name: string;
}

export default function AsideItem({ name }: Props) {
    return (
        <li>
            <StyledNavLink to={`/app/${name.toLowerCase()}`}>{name}</StyledNavLink>
        </li>
    )
}
