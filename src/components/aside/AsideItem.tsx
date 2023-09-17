import supabase from "../../services/supabase";
import { Span, StyledNavLink } from "./AsideItem.style";

type AsideItemProps = {
    name: string;
    path: string;
    icon: JSX.Element;
    onClose: () => void;
}

export const logout = async () => {
    const { error } = await supabase.auth.signOut();

    if (error) {
        throw error.message;
    }
    return true;
}

export default function AsideItem({ name, path, icon, onClose }: AsideItemProps) {
    return (
        <li>
            <StyledNavLink to={path} onClick={onClose}>
                {icon} <Span>{name}</Span>
            </StyledNavLink>
        </li>
    )
}
