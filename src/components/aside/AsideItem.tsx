import supabase from "../../services/supabase";
import { Span, StyledNavLink } from "./AsideItem.style";

type AsideItemProps = {
    name: string;
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

export default function AsideItem({ name, icon, onClose }: AsideItemProps) {

    //TODO refactor magic formatting 
    let ref = '';
    if (name.toLowerCase() === 'home') {
        ref = '/';
    }
    else {
        ref = name.toLowerCase() === 'home' ? '/' : `/app/${name.toLowerCase()}`
    }

    return (
        <li>
            <StyledNavLink to={ref} onClick={onClose}>
                {icon} <Span>{name}</Span>
            </StyledNavLink>
        </li>
    )
}
