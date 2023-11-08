import { Outlet } from 'react-router-dom'
import "react-toastify/dist/ReactToastify.css";
import NavBar from '../../components/aside/NavBar/NavBar.tsx';
import BurgerMenu from '../../components/burger/BurgerMenu.tsx';
import useBurgerMenu from '../../components/aside/NavBar/useBurger.tsx';
import { ContentContainer, Section, StyledLayout } from './AppLayou.style.ts';
import { useRef } from 'react';
import Overlay from '../../components/overlay/Overlay.tsx';
import AsideBar from '../../components/asideBar/AsideBar.tsx';


export default function AppLayout() {
    const { isBurgerOpen, handleBurger, closeBurger } = useBurgerMenu();

    const containter = useRef(null);

    return (
        <StyledLayout>
            <AsideBar />

            <ContentContainer>
                <NavBar isBurgerOpen={isBurgerOpen} onClose={closeBurger} />

                <Section ref={containter}>
                    <Outlet />
                </Section>
            </ContentContainer>

        </StyledLayout>
    )
}
