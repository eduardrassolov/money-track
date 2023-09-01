import { Outlet } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import NavBar from '../api/NavBar/NavBar.tsx';
import BurgerMenu from '../components/burger/BurgerMenu.tsx';
import Aside from '../components/aside/Aside.tsx';
import Overlay from '../components/overlay/Overlay.tsx';
import useBurgerMenu from '../api/NavBar/useBurger';
import { Section, StyledLayout } from './AppLayou.style.ts';

export default function AppLayout() {
    const { isBurgerOpen, handleBurger } = useBurgerMenu();
    return (
        <StyledLayout>
            <NavBar isBurgerOpen={isBurgerOpen} onClose={handleBurger} />

            <Aside isBurgerOpen={isBurgerOpen} onClose={handleBurger} />
            <BurgerMenu isOpen={isBurgerOpen} onClose={handleBurger} />
            <Overlay isShow={isBurgerOpen} onClose={handleBurger} />

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
