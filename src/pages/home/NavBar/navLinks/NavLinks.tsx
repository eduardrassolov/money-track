import { useNavigate } from "react-router-dom";

import { A, Li, Ul } from "./NavLinks.style.ts";
import ThemeSwitch from "../../../../components/swtich/ThemeSwitch";
import { ROUTES } from "../../../../config/routes";

type NavLinksProps = {
    isOpen?: boolean;
    onClose?: () => void;
};

export default function NavLinks({ isOpen = false, onClose }: NavLinksProps) {
    const navigate = useNavigate();

    function handleClick(id: string) {
        onClose?.();
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }

    const handleClickStart = () => navigate(ROUTES.LOGIN);

    return (
        <Ul $isOpen={isOpen}>
            <Li>
                <ThemeSwitch />
            </Li>
            <li>
                <A onClick={() => handleClick("header")}>Home</A>
            </li >
            <li>
                <A onClick={() => handleClick("feature")}>Features</A>
            </li>
            <li>
                <A onClick={handleClickStart}>Go to app</A>
            </li>
        </Ul>

    )
}
