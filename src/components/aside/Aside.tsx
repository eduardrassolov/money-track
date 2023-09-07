import AsideItem from "./AsideItem";
import { asideItemsName } from "../../config/configAsideItems";
import { AreaChartOutlined, DollarOutlined, ShoppingCartOutlined, CarryOutOutlined } from "@ant-design/icons";
import { HiOutlineHome } from "react-icons/hi2";
import { StyledAside } from "./Aside.style";
import { FC } from "react";
import { IBar } from "./NavBar/NavBar";
import Profile from "../user/Profile";

import { useMutation } from "@tanstack/react-query";
import { apiLogout } from "../../services/api/apiUser";
import { useNavigate } from "react-router-dom";
import { HiLogout } from "react-icons/hi";
import { ROUTES } from "../../router";

const icons: Array<JSX.Element> =
    [<AreaChartOutlined />,
    <ShoppingCartOutlined />,
    <DollarOutlined />,
    <CarryOutOutlined />,
    <HiOutlineHome />,
    ]
const Aside: FC<IBar> = ({ isBurgerOpen, onClose }) => {
    const navigate = useNavigate();

    const { mutate: logout } = useMutation({
        mutationFn: apiLogout,
        onSuccess: () => navigate(ROUTES.LOGIN, { replace: true })
    })

    const handleLogout = () => logout();


    return (
        <>
            <StyledAside $isBurgerOpen={isBurgerOpen} >
                <div>
                    <Profile />
                    <ul>
                        {asideItemsName.map((item, index) => <AsideItem key={item} name={item} icon={icons[index]} onClose={onClose} />)}
                    </ul>
                </div>
                <ul>
                    <AsideItem name={"Logout"} icon={<HiLogout />} onClose={handleLogout} />
                </ul>
            </StyledAside >
        </>
    )
}
export default Aside;