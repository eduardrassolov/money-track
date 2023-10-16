import React, { FC, Suspense } from "react";
import { useUser } from "../../utils/hooks/useUser";
import { ThemeProvider } from "styled-components";
import useTheme from "../../utils/hooks/useTheme";
import LoadingUi from "../../components/spinner/LoadingUi";
import AuthorizationLayout from "../authorization/Authorization";
interface IProtected {
    children: React.ReactNode;
}

const ProtectedLayout: FC<IProtected> = ({ children }) => {
    const { isAuthenticated } = useUser();
    const { theme } = useTheme();

    return <>
        {isAuthenticated ?
            <Suspense fallback={<LoadingUi size={"lg"} />}>
                <ThemeProvider theme={theme}>{children}</ThemeProvider>
            </Suspense>
            : <AuthorizationLayout />
        }

    </>
}
export default ProtectedLayout;