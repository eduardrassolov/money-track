import { ThemeProvider } from "styled-components";
import HeaderSection from "./headerSection/HeaderSection";
import NavBarHome from "./navBar/NavBarHome";
import useBurgerMenu from "../../components/navBarApp/useBurger";
import Footer from "./footer/Footer";
import useTheme from "../../utils/hooks/useTheme";
import FeaturesSection from "./features/FeaturesSection";
import { Container } from "./Home.page.style";

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
