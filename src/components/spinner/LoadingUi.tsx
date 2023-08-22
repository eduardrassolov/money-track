import { styled } from "styled-components"
import { FadeLoader } from "react-spinners"
import { useEffect } from "react";

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
    animation : appear 0.3s ease-in-out;
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
const Spinner = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 11;
`

export default function LoadingUi() {
    return (
        <>
            <Overlay />
            <Spinner>
                <FadeLoader color="white" />
            </Spinner>
        </>
    )
}
