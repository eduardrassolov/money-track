import { Outlet } from 'react-router-dom';
import { useRef } from 'react';
import "react-toastify/dist/ReactToastify.css";

import { ContentContainer, Main, StyledLayout } from './AppLayout.style.ts';
import SideBarNav from '../../components/sideBarNav/SideBarNav.tsx';
import { NavBar } from '../../components/navBarApp/NavBar.tsx';
import useBurgerMenu from '../../components/navBarApp/useBurger.tsx';

export default function AppLayout() {
    const { isBurgerOpen, handleBurger } = useBurgerMenu();

    const containter = useRef(null);

    return (
        <StyledLayout>
            <SideBarNav isOpen={isBurgerOpen} onClose={handleBurger} />

            <ContentContainer>
                <NavBar isOpen={isBurgerOpen} onBurgerClick={handleBurger} />

                <Main ref={containter}>
                    <Outlet />
                </Main>
            </ContentContainer>
        </StyledLayout>
    )
}
