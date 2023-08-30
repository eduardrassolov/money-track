import { styled } from "styled-components"

const StyledOverlay = styled.div<{ $isShow: boolean }>`
    position: fixed;
    display: ${props => props.$isShow ? 'flex' : 'none'};
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0,0,0,0.5);
    z-index: 10;
`

type OverlayProps = {
    isShow: boolean;
    onClose: () => void;
}

export default function Overlay({ isShow, onClose }: OverlayProps) {
    return (
        <StyledOverlay $isShow={isShow} onClick={onClose}>Overlay</StyledOverlay>
    )
}
