import { styled } from 'styled-components';
import { devices } from '../../config/breakPoints';

interface IBurgerMenu {
    isOpen: boolean,
    onClose: () => void
}

export const StyledBurgerMenu = styled.div<{ $isOpen: boolean }>`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 1rem;
    left: 1rem;
    z-index: 30;

    transition: all 300ms;
    transform: translateY(0);

    div {
        width: 2rem;
        height: 0.2rem;
        background: ${(props) => props.theme.text};
        border-radius: 10px;
        transition: all 300ms;
    }

    div:nth-child(1) {
        transform: ${(props) => props.$isOpen ? 'rotate(45deg)' : 'rotate(0)'};
        transform: ${(props) => props.$isOpen ? 'translateY(0.7rem) rotate(45deg)' : 'translateY(0)'};
        transition: all 300ms ease-in-out;
    }

    div:nth-child(2) {
        transform: ${(props) => props.$isOpen ? 'rotate(-45deg)' : 'rotate(0)'};
        transition: all 300ms ease-in-out;
        margin: 0.4rem 0;
    }

    div:nth-child(3) {
        opacity: ${(props) => props.$isOpen ? '0' : '1'};
        transform: ${props => props.$isOpen ? 'translateX(-3rem)' : ''};
        transition: all 300ms ease-in-out;
    }

    &:hover{
        cursor: pointer;
        transform: scale(1.1);
        transition: all 300ms;
    }
    

    @media only screen and (min-width: ${devices.md}px){
        transform: translateY(-5rem);
    }
`

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