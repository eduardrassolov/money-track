import { HiMiniArrowRightOnRectangle, HiOutlineHome, HiOutlineWrenchScrewdriver } from "react-icons/hi2";
import ThemeToggle from "../ThemeToggle";
import { StyledItem } from "../item/DropDownItem.style";
import { StyledContent } from "./DropDownContent.style";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../../../config/routes";
import { useMutation } from "@tanstack/react-query";
import { apiLogout } from "../../../../services/api/apiUser";
import useTheme from "../../../../utils/hooks/useTheme";

export default function DropDownContent() {
    const navigate = useNavigate();
    const { changeTheme } = useTheme();

    const handleClick = (path: string) => {
        console.log(path);
        navigate(path);
    }

    const { mutate: logOut } = useMutation({
        mutationFn: apiLogout,
        onSuccess: () => navigate(ROUTES.LOGIN, { replace: true })
    });

    return (
        <StyledContent>
            <StyledItem onClick={() => changeTheme()}>
                <ThemeToggle />
            </StyledItem>

            <StyledItem onClick={() => handleClick(ROUTES.SETTINGS)}>
                <HiOutlineWrenchScrewdriver /> <span>Settings</span>
            </StyledItem>

            <StyledItem onClick={() => handleClick(ROUTES.HOME)}>
                <HiOutlineHome /> <span>Home</span>
            </StyledItem>

            <StyledItem onClick={() => logOut()} >
                <HiMiniArrowRightOnRectangle /> <span>Logout</span>
            </StyledItem>
        </StyledContent >
    )
}
