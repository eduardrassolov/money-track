import { Outlet } from 'react-router-dom'
import "react-toastify/dist/ReactToastify.css";
// import useBurgerMenu from '../../components/aside/NavBar/useBurger.tsx';
import { ContentContainer, Section, StyledLayout } from './AppLayou.style.ts';
import { useRef } from 'react';
import AsideBar from '../../components/asideBar/AsideBar.tsx';
import { NavBar } from '../../components/aside/NavBar/NavBar.tsx';


export default function AppLayout() {
    // const { isBurgerOpen, handleBurger, closeBurger } = useBurgerMenu();

    const containter = useRef(null);

    return (
        <StyledLayout>
            <AsideBar />

            <ContentContainer>
                {/* <NavBar isBurgerOpen={isBurgerOpen} onClose={closeBurger} /> */}
                <NavBar />

                <Section ref={containter}>
                    <Outlet />
                </Section>
            </ContentContainer>
        </StyledLayout>
    )
}
