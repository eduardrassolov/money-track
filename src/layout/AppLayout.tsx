import Aside from '../components/aside/Aside'
import { Outlet } from 'react-router-dom'
import { styled } from 'styled-components'
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const StyledLayout = styled.div`
    display: flex;
    flex-direction: column;
    width: 100vw;
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
    padding: 1rem 0;
`

export default function AppLayout() {
    return (
        <StyledLayout>
            <Aside />

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
