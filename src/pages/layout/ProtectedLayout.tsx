import React, { FC } from "react";
import { useUser } from "../../utils/hooks/useUser";
import NoPermission from "../errors/NoPermission";

interface IProtected {
    children: React.ReactNode;
}

const ProtectedLayout: FC<IProtected> = ({ children }) => {
    const { isAuthenticated } = useUser();

    if (!isAuthenticated) {
        return <NoPermission />;
    }
    return children;
}
export default ProtectedLayout;