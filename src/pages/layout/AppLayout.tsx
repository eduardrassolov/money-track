import { Outlet } from 'react-router-dom';
import { useRef } from 'react';
import "react-toastify/dist/ReactToastify.css";

import { ContentContainer, Section, StyledLayout } from './AppLayout.style.ts';
import AsideBar from '../../components/asideBar/AsideBar.tsx';
import { NavBar } from '../../components/navBarApp/NavBar.tsx';
import useBurgerMenu from '../../components/navBarApp/useBurger.tsx';

export default function AppLayout() {
    const { isBurgerOpen, handleBurger } = useBurgerMenu();

    const containter = useRef(null);

    return (
        <StyledLayout>
            <AsideBar isOpen={isBurgerOpen} onClose={handleBurger} />

            <ContentContainer>
                <NavBar isOpen={isBurgerOpen} onBurgerClick={handleBurger} />

                <Section ref={containter}>
                    <Outlet />
                </Section>
            </ContentContainer>
        </StyledLayout>
    )
}
