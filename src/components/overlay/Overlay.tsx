import { StyledOverlay } from "./Overlay.style";

type OverlayProps = {
    isShow: boolean;
    onClose: () => void;
}

function Overlay({ isShow, onClose }: OverlayProps) {
    return (
        <StyledOverlay $isShow={isShow} onClick={onClose}></StyledOverlay>
    )
}
export default Overlay;
