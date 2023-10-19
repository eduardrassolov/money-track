import { Outlet } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import useTheme from "../../utils/hooks/useTheme.tsx";
import { ImageContainer, StyledAuthorization, StyledContainer } from './Authorizations.style.ts';

export default function AuthorizationLayout() {
    const { theme } = useTheme();
    return (
        <ThemeProvider theme={theme}>
            <StyledAuthorization>
                <ImageContainer>
                    <img src="/login.svg" />
                </ImageContainer>

                <StyledContainer>
                    <Outlet />
                </StyledContainer>
            </StyledAuthorization>
        </ThemeProvider >
    )
}
