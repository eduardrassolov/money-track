import Aside from '../components/aside/Aside'
import { Outlet, useNavigation } from 'react-router-dom'
import { styled } from 'styled-components'
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import LoadingUi from '../components/spinner/LoadingUi';
import Footer from '../components/Footer/Footer';

const StyledLayout = styled.div`
    display: flex;
    flex-direction: row;
    width: 100vw;
    background-color: #fff;
`
const Section = styled.section`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: scroll;
`

export default function AppLayout() {
    const navigation = useNavigation();

    console.log(navigation.state);
    return (
        <StyledLayout>
            {navigation.state === 'loading' ? <LoadingUi /> : ''}

            <Aside />

            <Section>
                <Outlet />
            </Section>

            <ToastContainer
                position="top-right"
                hideProgressBar={true}
                pauseOnHover={false}
                autoClose={2000}
            />

        </StyledLayout>
    )
}
