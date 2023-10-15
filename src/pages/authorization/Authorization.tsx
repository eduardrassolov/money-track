import { Outlet } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import useTheme from "../../utils/hooks/useTheme.tsx";
import { devices } from '../../styles/breakPoints.ts';
import useLogin from './useLogin.ts';


const StyledAuthorization = styled.div`
    background: ${props => props.theme.background};
    color: ${props => props.theme.text};
    height: 100vh;
    justify-content: center;
    align-items: center;

    @media only screen and (min-width: ${devices.sm}px){
        display: grid;
        grid-template-columns: 1fr 1fr;
    }
`
const ImageContainer = styled.div`
    display: none;

    @media only screen and (min-width: ${devices.sm}px){  
        img{
            width: 100%;
            max-width: 700px;
        }
        display: flex;
        justify-content: center;
        align-items: center;
        max-width: 700px;
    }   

`
const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 2rem 1rem;
    max-width: 600px;
    margin: auto 0;
`

export default function AuthorizationLayout() {
    const { theme } = useTheme();
    return (
        <ThemeProvider theme={theme}>
            <StyledAuthorization>
                <ImageContainer>
                    <img src="/login.svg" />
                </ImageContainer>

                <StyledContainer>
                    <Outlet />
                </StyledContainer>
            </StyledAuthorization>
        </ThemeProvider >
    )
}
