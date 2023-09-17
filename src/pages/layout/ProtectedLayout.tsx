import React, { FC } from "react";
import { useUser } from "../../utils/hooks/useUser";
import Login from "../login/login.page";
import { ThemeProvider } from "styled-components";
import useTheme from "../../utils/hooks/useTheme";
interface IProtected {
    children: React.ReactNode;
}

const ProtectedLayout: FC<IProtected> = ({ children }) => {
    const { isAuthenticated } = useUser();
    const { theme } = useTheme();

    if (!isAuthenticated) {
        return <Login />;
    }

    return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
export default ProtectedLayout;