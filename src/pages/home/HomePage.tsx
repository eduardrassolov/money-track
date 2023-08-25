
import { styled } from 'styled-components'
import HeaderSection from './HeaderSection'
import NavBarHome from './NavBar/NavBarHome'

const Container = styled.div`
    margin: 0;
    padding: 0;
    width: 100vw;
`

export default function HomePage() {
    return (
        <Container>
            <NavBarHome />

            <HeaderSection id={"header"} />

            {/* <FeaturesSection id={"feature"} /> */}
        </Container>
    )
}
