import { ThemeProvider } from "styled-components";
// import useBurgerMenu from "../../components/navBarApp/useBurger";
import useTheme from "../../utils/hooks/useTheme";
import { Container } from "./Home.page.style";

// import Footer from "./footer/Footer";
// import FeaturesSection from "./features/FeaturesSection";
import HeaderSection from "./header/HeaderSection";
// import NavbarHome from "./navbar/NavbarHome"; 
import FooterContainer from "./footer/Footer";

// import NavBarHome from "./navBar/NavBarHome";

export default function HomePage() {
    // const { isBurgerOpen, handleBurger } = useBurgerMenu();
    const { theme } = useTheme();

    return (
        <ThemeProvider theme={theme}>
            <Container>

                {/* <NavbarHome isOpen={isBurgerOpen} onClose={handleBurger} /> */}

                <HeaderSection id={"header"} />

                {/* <FeaturesSection id={"feature"} />*/}

                <FooterContainer />
            </Container>
        </ThemeProvider>
    )
}
