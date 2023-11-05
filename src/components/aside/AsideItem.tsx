import supabase from "../../services/supabase";
import { Span, StyledNavLink } from "./AsideItem.style";

type AsideItemProps = {
    name: string;
    path: string;
    icon: JSX.Element;
    onCloseBurger: () => void;
}

export const logout = async () => {
    const { error } = await supabase.auth.signOut();

    if (error) {
        throw error.message;
    }
    return true;
}

export default function AsideItem({ name, path, icon, onCloseBurger }: AsideItemProps) {
    return (
        <li>
            <StyledNavLink to={path} onClick={onCloseBurger}>
                {icon} <Span>{name}</Span>
            </StyledNavLink>
        </li>
    )
}
