import React, { FC, Suspense } from "react";
import { useUser } from "../../utils/hooks/useUser";
import Login from "../login/login.page";
import { ThemeProvider } from "styled-components";
import useTheme from "../../utils/hooks/useTheme";
import LoadingUi from "../../components/spinner/LoadingUi";
interface IProtected {
    children: React.ReactNode;
}

const ProtectedLayout: FC<IProtected> = ({ children }) => {
    const { isAuthenticated } = useUser();
    const { theme } = useTheme();

    if (!isAuthenticated) {
        return <Login />;
    }

    return <>
        <Suspense fallback={<LoadingUi size={"lg"} />}>
            <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </Suspense>
    </>
}
export default ProtectedLayout;