import styled from "styled-components";
import supabase from "../../services/supabase";
import { NavLink } from "react-router-dom";
import { devices } from "../../config/breakPoints";


type AsideItemProps = {
    name: string;
    path: string;
    icon: JSX.Element;
    onCloseBurger: () => void;
}

const Li = styled.li`
    padding: 0 0.5rem;
`

const Icon = styled.span`
    font-size: 1.5rem;
`

const StyledItem = styled(NavLink)`
    text-decoration: none;
    display: flex;
    font-size: 0.9rem;
    gap: 0.5rem;
    align-items: center;
    text-align: center;
    cursor: pointer;
    padding: 0.5rem 1rem;
    transition: 300ms all;
    color: gray;
    border-radius: 10px;

    &:hover{
        background: ${props => props.theme.hoverAside};
        color: ${props => props.theme.text};
    }
    &.active{
        background: ${props => props.theme.hoverAside};
        color: ${props => props.theme.text};
    }
`

const Text = styled.span`

`

export const logout = async () => {
    const { error } = await supabase.auth.signOut();

    if (error) {
        throw error.message;
    }
    return true;
}

export default function AsideItem({ name, path, icon }: AsideItemProps) {
    return (
        <Li>
            <StyledItem to={path}>
                <Icon>{icon}</Icon>
                <Text>{name}</Text>
            </StyledItem>
        </Li>
    )
}
