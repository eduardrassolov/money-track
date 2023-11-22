import styled from "styled-components";
import { devices } from "../../config/breakPoints";

export const StyledOverlay = styled.div<{ $isShow: boolean }>`
    position: fixed;
    display: ${props => props.$isShow ? 'flex' : 'none'};
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;

    background: rgba(0, 0, 0, 0.7);
    backdrop-filter: blur(2px);
    z-index: 15;

    @media only screen and (min-width: ${devices.md}px){
        display: none; 
    }
`
