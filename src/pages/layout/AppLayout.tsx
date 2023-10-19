import { Outlet } from 'react-router-dom'
import "react-toastify/dist/ReactToastify.css";
import NavBar from '../../components/aside/NavBar/NavBar.tsx';
import BurgerMenu from '../../components/burger/BurgerMenu.tsx';
import Aside from '../../components/aside/Aside.tsx';
import Overlay from '../../components/overlay/Overlay.tsx';
import useBurgerMenu from '../../components/aside/NavBar/useBurger.tsx';
import { Section, StyledLayout } from './AppLayou.style.ts';

export default function AppLayout() {
    const { isBurgerOpen, handleBurger } = useBurgerMenu();


    console.log("Im rendered");
    return (
        <StyledLayout>
            <NavBar isBurgerOpen={isBurgerOpen} onClose={handleBurger} />

            <Aside isBurgerOpen={isBurgerOpen} onClose={handleBurger} />
            <BurgerMenu isOpen={isBurgerOpen} onClose={handleBurger} />
            <Overlay isShow={isBurgerOpen} onClose={handleBurger} />

            <Section>
                <Outlet />
            </Section>
        </StyledLayout>
    )
}
