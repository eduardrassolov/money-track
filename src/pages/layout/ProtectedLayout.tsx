import React, { FC, Suspense, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import { useUser } from "../../utils/hooks/useUser";
import LoadingUi from "../../components/spinner/LoadingUi";
import { ROUTES } from "../../config/routes";
import { useBoundStore } from "../../store/store";
interface IProtected {
    children: React.ReactNode;
}

const ProtectedLayout: FC<IProtected> = ({ children }) => {
    const { isAuthenticated, isLoading } = useUser();
    const theme = useBoundStore(state => state.theme);
    const navigate = useNavigate();
    console.log("isAuth", isAuthenticated);

    useEffect(function () {
        if (!isAuthenticated && !isLoading) {
            navigate(ROUTES.LOGIN);
        }

    }, [isAuthenticated, isLoading, navigate]);


    return (
        <>
            {isLoading ? <LoadingUi /> : ""}

            {isAuthenticated ?
                <Suspense fallback={<LoadingUi size={"lg"} />}>
                    <ThemeProvider theme={theme}>{children}</ThemeProvider>
                </Suspense>
                : ""
            }
        </>

    )
}
export default ProtectedLayout;