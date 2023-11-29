import { StyledBurgerMenu } from './Burger.style';

interface IBurgerMenu {
    isOpen: boolean,
    onClose: () => void
}

export function BurgerMenu({ isOpen, onClose }: IBurgerMenu) {
    return (
        <>
            <StyledBurgerMenu $isOpen={isOpen} onClick={onClose}>
                <div></div>
                <div></div>
                <div></div>
            </StyledBurgerMenu>
        </>
    )
}
export default BurgerMenu