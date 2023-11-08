import { Outlet } from 'react-router-dom'
import "react-toastify/dist/ReactToastify.css";
import NavBar from '../../components/aside/NavBar/NavBar.tsx';
import BurgerMenu from '../../components/burger/BurgerMenu.tsx';
import useBurgerMenu from '../../components/aside/NavBar/useBurger.tsx';
import { Section, StyledLayout } from './AppLayou.style.ts';
import { useRef } from 'react';
import Overlay from '../../components/overlay/Overlay.tsx';
import AsideBar from '../../components/asideBar/AsideBar.tsx';

export default function AppLayout() {
    // const { isBurgerOpen, handleBurger, closeBurger } = useBurgerMenu();

    const containter = useRef(null);

    return (
        <StyledLayout>
            {/* <Overlay isShow={isBurgerOpen} onClose={handleBurger} /> */}

            {/* <NavBar isBurgerOpen={isBurgerOpen} onClose={closeBurger} /> */}
            <AsideBar />

            {/* <BurgerMenu isOpen={isBurgerOpen} onClose={handleBurger} /> */}

            <Section ref={containter}>
                <Outlet />
            </Section>

        </StyledLayout>
    )
}
