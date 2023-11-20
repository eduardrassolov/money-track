import supabase from "../../services/supabase";
import { useNavigate } from "react-router-dom";
import { Icon, Li, StyledItem, Text } from "./asideItem.style";

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
    const navigate = useNavigate();

    function handleClick(path: string) {
        navigate(path);
        onCloseBurger();
    }

    return (
        <Li>
            <StyledItem to={path} onClick={() => handleClick(path)}>
                <Icon>{icon}</Icon>
                <Text>{name}</Text>
            </StyledItem>
        </Li>
    )
}
