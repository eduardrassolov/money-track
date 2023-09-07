import React, { FC } from "react";
import { useUser } from "../../utils/hooks/useUser";
import Login from "../login/login.page";
interface IProtected {
    children: React.ReactNode;
}

const ProtectedLayout: FC<IProtected> = ({ children }) => {
    const { isAuthenticated } = useUser();

    if (!isAuthenticated) {
        return <Login />;
    }
    return children;
}
export default ProtectedLayout;