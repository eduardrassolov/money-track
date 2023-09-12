import { keyframes, styled } from "styled-components"
import { FadeLoader } from "react-spinners"

const Overlay = styled.div`
    position: absolute;
    top: 0; 
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0,0,0,0.5);
    opacity: 100;
    z-index: 10;
    display: flex;
    justify-content: center;
    align-items: center;
    animation : appear 250ms ease-in;
    backdrop-filter: blur(2px);

    @keyframes appear { 
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
    }
`



const rotation = keyframes`
    from{
        transform: rotate(0deg);
    }
    to{
        transform: rotate(360deg);
    }
`

const Loader = styled.span`
    width: 48px;
    height: 48px;
    border-radius: 50%;
    display: inline-block;
    border-top: 4px solid ${props => props.theme.colorLogoMain};
    border-right: 4px solid transparent;
    box-sizing: border-box;
    animation: ${rotation} 1s linear infinite;

    &::after {
        content: '';  
        box-sizing: border-box;
        position: absolute;
        left: 0;
        top: 0;
        width: 48px;
        height: 48px;
        border-radius: 50%;
        border-bottom: 4px solid ${props => props.theme.colorLogoSecondary};
        border-left: 4px solid transparent;
    }
`


export default function LoadingUi() {
    return (
        <>
            
            <Loader></Loader>
        </>
    )
}
