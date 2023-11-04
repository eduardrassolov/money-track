import { ThemeProvider, styled } from 'styled-components'
import HeaderSection from './HeaderSection.page'
import NavBarHome from './NavBar/NavBarHome'
import Burger from './NavBar/Burger'
import useBurgerMenu from '../../components/aside/NavBar/useBurger'
import Footer from './Footer/Footer'
import useTheme from '../../utils/hooks/useTheme'
import FeaturesSection from './FeaturesSection'

const Container = styled.div`
    margin: 0;
    padding: 0;
    width: 100vw;
    display: flex;
    flex-direction: column;
    color: ${(props) => props.theme.text};
    transition: all 300ms;
`

export default function HomePage() {
    const { isBurgerOpen, handleBurger } = useBurgerMenu();
    const { theme } = useTheme();

    return (
        <ThemeProvider theme={theme}>
            <Container>
                <NavBarHome isOpen={isBurgerOpen} onClose={handleBurger} />
                <Burger isOpen={isBurgerOpen} onCLose={handleBurger} />

                <HeaderSection id={"header"} />

                <FeaturesSection id={"feature"} />

                <Footer />
            </Container>
        </ThemeProvider>
    )
}