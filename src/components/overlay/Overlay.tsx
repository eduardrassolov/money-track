import { styled } from "styled-components";
import { FC } from "react";

import { devices } from "../../styles/breakPoints";
import AnimatedContainer from "../animation/AnimatedContainer";

const StyledOverlay = styled.div<{ $isShow: boolean }>`
    position: fixed;
    display: ${props => props.$isShow ? 'flex' : 'none'};
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0,0,0,0.5);
    z-index: 25;

    @media only screen and (min-width: ${devices.md}px){
        display: none; 
    }
`

type OverlayProps = {
    isShow: boolean;
    onClose: () => void;
}

const Overlay: FC<OverlayProps> = ({ isShow, onClose }) => {
    return (
        <AnimatedContainer duration={0.5} delay={0.5}>
            <StyledOverlay $isShow={isShow} onClick={onClose}></StyledOverlay>
        </AnimatedContainer>
    )
}
export default Overlay;
