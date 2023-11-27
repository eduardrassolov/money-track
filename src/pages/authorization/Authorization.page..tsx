import { Outlet, useNavigate } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import useTheme from "../../utils/hooks/useTheme.tsx";
import { ImageContainer, StyledAuthorization, StyledContainer } from './Authorizations.style.ts';
import { useUser } from '../../utils/hooks/useUser.tsx';
import { ROUTES } from '../../config/routes.ts';

export default function AuthorizationLayout() {
    const { theme } = useTheme();
    const navigate = useNavigate();

    const { isAuthenticated } = useUser();

    if (isAuthenticated) {
        navigate(ROUTES.DASHBOARD)
    }

    return (
        <ThemeProvider theme={theme}>
            <StyledAuthorization>

                <ImageContainer>
                    <img src="/loginImg.svg" />
                </ImageContainer>

                <StyledContainer>
                    <Outlet />
                </StyledContainer>
            </StyledAuthorization>
        </ThemeProvider >
    )
}
