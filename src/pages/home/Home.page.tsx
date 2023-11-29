import { ThemeProvider } from "styled-components";
import useBurgerMenu from "../../components/navBarApp/useBurger";
import useTheme from "../../utils/hooks/useTheme";
import { Container } from "./Home.page.style";
//@ts-ignore
import Footer from "./footer/Footer";
//@ts-ignore
import FeaturesSection from "./features/FeaturesSection";
import HeaderSection from "./header/HeaderSection";
//@ts-ignore
import NavbarHome from "./navbar/NavbarHome";
//@ts-ignore
import FooterContainer from "./footer/Footer";

// import NavBarHome from "./navBar/NavBarHome";

export default function HomePage() {
    const { isBurgerOpen, handleBurger } = useBurgerMenu();
    const { theme } = useTheme();

    return (
        <ThemeProvider theme={theme}>
            <Container>

                <NavbarHome isOpen={isBurgerOpen} onClose={handleBurger} />

                <HeaderSection id={"header"} />

                <FeaturesSection id={"feature"} />

                <FooterContainer />
            </Container>
        </ThemeProvider>
    )
}
