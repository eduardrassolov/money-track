
import { styled } from 'styled-components'
import HeaderSection from './HeaderSection'
import NavBarHome from './NavBar/NavBarHome'
import FeaturesSection from './FeaturesSection'
import Footer from '../../components/footer/Footer'
import Burger from './NavBar/Burger'
import useBurgerMenu from '../../components/aside/NavBar/useBurger'

const Container = styled.div`
    margin: 0;
    padding: 0;
    width: 100vw;
    display: flex;
    flex-direction: column;
`

export default function HomePage() {
    const { isBurgerOpen, handleBurger } = useBurgerMenu();
    return (
        <Container>
            <NavBarHome isOpen={isBurgerOpen} onClose={handleBurger} />
            <Burger isOpen={isBurgerOpen} onCLose={handleBurger} />

            <HeaderSection id={"header"} />

            <FeaturesSection id={"feature"} />

            <Footer />
        </Container>
    )
}
