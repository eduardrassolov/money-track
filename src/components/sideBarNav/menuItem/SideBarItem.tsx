import { useNavigate } from "react-router-dom";
import { Icon, Li, StyledItem, Text } from "./sideBarItem.style.ts";

type SideBarItemProp = {
    name: string;
    path: string;
    icon: JSX.Element;
    onCloseBurger: () => void;
}

export default function SideBarItem({ name, path, icon, onCloseBurger }: SideBarItemProp) {
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
