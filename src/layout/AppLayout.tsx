import { Outlet } from 'react-router-dom'
import { styled } from 'styled-components'
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import NavBar from '../api/NavBar/NavBar';
import Aside from '../components/aside/Aside';
import useBurgerMenu from '../api/NavBar/useBurger';
import { devices } from '../styles/breakPoints.ts';
import BurgerMenu from '../components/burger/BurgerMenu.tsx';

const StyledLayout = styled.div`
    display: flex;

    background-color: #fff;
`

const Section = styled.section`
    background-color: #f5f5f5;
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: scroll;
    padding: 5rem 0;

    @media only screen and ${devices.md}{
        padding: 1rem 0;
    }
`

export default function AppLayout() {
    const { isBurgerOpen, handleBurger } = useBurgerMenu();
    return (
        <StyledLayout>
            <NavBar isBurgerOpen={isBurgerOpen} onClose={handleBurger} />
            <Aside isBurgerOpen={isBurgerOpen} onClose={handleBurger} />
            <BurgerMenu isOpen={isBurgerOpen} onClose={handleBurger} />

            <Section>
                <Outlet />
            </Section>

            <ToastContainer
                position="top-center"
                hideProgressBar={true}
                pauseOnHover={false}
                autoClose={2000}
            />

        </StyledLayout>
    )
}
