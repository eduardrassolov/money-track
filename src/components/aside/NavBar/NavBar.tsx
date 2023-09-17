import { styled } from "styled-components";
import { FC } from "react";
import BurgerMenu from "../../burger/BurgerMenu";
import { devices } from "../../../styles/breakPoints";
import Switch, { NavIcons } from "../../swtich/Switch";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../../router";
import { apiLogout } from "../../../services/api/apiUser";
import { useMutation } from "@tanstack/react-query";
import { HiMiniArrowRightOnRectangle, HiOutlineHome } from "react-icons/hi2";

const Nav = styled.nav`
    background: ${(props) => props.theme.background};
    color: ${(props) => props.theme.text};
    display: flex;
    align-items: center;
    justify-content: end;
    width: 100%;
    height: 1.5rem;
    position: fixed;
    padding: 1rem 1rem 1rem 0;
    transition: all 300ms;
    transform: translateY(0);

    /* @media only screen and (min-width: ${devices.md}px) { */
        /* transform: translateY(-5rem); */
    /* } */
`

export interface IBar {
    isBurgerOpen: boolean;
    onClose: () => void;
}


const NavBar: FC<IBar> = ({ isBurgerOpen, onClose }) => {
    const navigate = useNavigate();
    const { mutate: logout } = useMutation({
        mutationFn: apiLogout,
        onSuccess: () => navigate(ROUTES.LOGIN, { replace: true })
    })

    const handleHomePage = () => navigate(ROUTES.HOME);
    const handleLogOut = () => logout();

    return (
        <Nav>
            <BurgerMenu isOpen={isBurgerOpen} onClose={onClose} />
            <Switch />

            <NavIcons>
                <HiOutlineHome onClick={handleHomePage} />
            </NavIcons>

            <NavIcons>
                <HiMiniArrowRightOnRectangle onClick={handleLogOut} />
            </NavIcons>
        </Nav >
    )
}
export default NavBar;
