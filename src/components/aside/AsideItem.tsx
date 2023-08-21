import { NavLink } from "react-router-dom";
import { styled } from "styled-components"


const StyledNavLink = styled(NavLink)`
    display: flex;
    text-decoration: none;
    padding: 0.8rem 1rem;
    color: #000;
    font-size: 1.5rem;
    transition: background-color 0.3s ease-in-out;
    border-bottom: 1px solid #ccc;
    align-items: center;

    &:hover {
        background-color: #e0e0e0;

    }
    &.active {
        background-color: #c0c0c0;
        color: #383636;

    }
`
const Span = styled.span`
    margin-left: 0.5rem;
    font-size: 1rem;
    @media (max-width: 800px){
        display: none;
    }
`

type Props = {
    name: string;
    icon: JSX.Element;
}

export default function AsideItem({ name, icon }: Props) {
    return (
        <li>
            <StyledNavLink to={`/app/${name.toLowerCase()}`}>
                {icon} <Span>{name}</Span>
            </StyledNavLink>
        </li>
    )
}
