import { ThemeProvider } from "styled-components";
import useBurgerMenu from "../../components/navBarApp/useBurger";
import useTheme from "../../utils/hooks/useTheme";
import { Container } from "./Home.page.style";
import HeaderSection from "./headerSection/HeaderSection.tsx";
import NavBarHome from "./navBar/NavBarHome.tsx";
import Footer from "./footer/Footer.tsx";
import FeaturesSection from "./features/FeaturesSection.tsx";

export default function HomePage() {
    const { isBurgerOpen, handleBurger } = useBurgerMenu();
    const { theme } = useTheme();

    return (
        <ThemeProvider theme={theme}>
            <Container>

                <NavBarHome isOpen={isBurgerOpen} onClose={handleBurger} />

                <HeaderSection id={"header"} />

                <FeaturesSection id={"feature"} />

                <Footer />
            </Container>
        </ThemeProvider>
    )
}
