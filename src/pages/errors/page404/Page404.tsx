import { ThemeProvider } from "styled-components";
import { Container, Div, H1, P, StyledNavLink, Text } from "./Page404.style";
import useTheme from "../../../utils/hooks/useTheme";
import Overlay from "../../../components/overlay/Overlay";
import { NavLink } from "react-router-dom";
import { ROUTES } from "../../../config/routes";

export default function Page404() {
    const { theme } = useTheme();
    return (

        <ThemeProvider theme={theme}>
            <Container>
                <Div>
                    <H1>404</H1>
                    <P>Sorry, we were unable to find that page</P>
                    <Text>Start from <StyledNavLink to={ROUTES.HOME}>home page</StyledNavLink></Text>
                </Div>
            </Container>
        </ThemeProvider>
    )
}
