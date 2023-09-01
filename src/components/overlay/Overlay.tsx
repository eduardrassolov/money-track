import { styled } from "styled-components"
import { devices } from "../../styles/breakPoints";
import { FC } from "react";

const StyledOverlay = styled.div<{ $isShow: boolean }>`
    position: fixed;
    display: ${props => props.$isShow ? 'flex' : 'none'};
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0,0,0,0.5);
    z-index: 10;

    @media only screen and ${devices.md}{
        display: none; 
    }
`

type OverlayProps = {
    isShow: boolean;
    onClose: () => void;
}

const Overlay: FC<OverlayProps> = ({ isShow, onClose }) => {
    return (
        <StyledOverlay $isShow={isShow} onClick={onClose}></StyledOverlay>
    )
}
export default Overlay;
