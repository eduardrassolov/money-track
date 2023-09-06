import React, { FC } from "react";
import { useUser } from "../../utils/hooks/useUser";
import LoginPage from "../login/LoginPage";

interface IProtected {
    children: React.ReactNode;
}

const ProtectedLayout: FC<IProtected> = ({ children }) => {
    const { isAuthenticated } = useUser();

    if (!isAuthenticated) {
        return <LoginPage />;
    }
    return children;
}
export default ProtectedLayout;